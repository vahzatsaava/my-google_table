export class CellModel {
  id?: number;
  formula: string;
  result: number;
  row: string;
  columnNumber: number;
  tableID: number; // Добавьте поле tableID

  constructor(
    formula: string,
    result: number,
    row: string,
    columnNumber: number,
    tableID: number, // Измените параметр на tableID
    id?: number
  ) {
    this.id = id;
    this.formula = formula;
    this.result = result;
    this.row = row;
    this.columnNumber = columnNumber;
    this.tableID = tableID; // Присвойте значение параметра tableID
  }
}
