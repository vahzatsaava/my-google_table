export class CellRequest {
  formula: string;
  row: string;
  columnNumber: number;
  id?:number;


  constructor( formula: string, row: string, columnNumber: number,id?: number) {
    this.id = id;
    this.formula = formula;
    this.row = row;
    this.columnNumber = columnNumber;
  }
}
