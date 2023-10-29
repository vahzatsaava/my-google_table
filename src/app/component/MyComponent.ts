import {Component} from '@angular/core';
import {HttpService} from "../http.service";
import {CellModel} from "../models/CellModel";
import {CellModelResultOutput} from "../models/CellModelResultOutput";

@Component({
  selector: 'app-my-component',
  templateUrl: './My-Component.html',
  styleUrls: ['./My-component.component.css']
})
export class MyComponent {
  id!: number | undefined;
  tableName!: string;
  formula!: string;
  row!: string;
  result!: number;
  columnNumber!: number;
  cellId!: number;
  cellModel!: CellModel;
  cellModelsArr!: CellModel[];
  cellModelResultInput!: CellModelResultOutput[];


  constructor(private httpService: HttpService) {

  }

  getAll() {
    this.httpService.getAllCellModels(this.tableName).subscribe(response => {
      console.log('результат : ', response);
      this.cellModelResultInput = response;
    })
  }

  createCell() {
    if (this.id !== undefined) {
      console.log(this.id);
      const cellRequest = {
        formula: this.formula,
        row: this.row,
        columnNumber: this.columnNumber
      };

      this.httpService.createCell(this.id, cellRequest)
        .subscribe(response => {
          console.log('Результат создания ячейки:', response);

          this.cellModel = new CellModel(response.formula, response.result, response.row, response.columnNumber, response.tableID, response.id);
        });
    } else {
      console.error('Не установлен tableID. Создайте таблицу сначала.');
    }
  }

  updateCellValue() {
    if (this.cellId) {
      const cellRequest = {
        formula: this.formula,
        row: this.row,
        columnNumber: this.columnNumber,
        id: this.cellId
      };

      this.httpService.updateCellValue(cellRequest)
        .subscribe(response => {
          console.log('Результат обновления ячейки:', response);
          this.cellModel = new CellModel(response.formula, response.result, response.row, response.columnNumber, response.tableID, response.id);
        });
    } else {
      console.error('Не установлен cellId. Выберите ячейку для обновления.');
    }
  }

  createTable() {
    this.httpService.createTable(this.tableName)
      .subscribe(response => {
        console.log('Все ячейки:', response);
        this.id = response.id;
      });
  }


}
