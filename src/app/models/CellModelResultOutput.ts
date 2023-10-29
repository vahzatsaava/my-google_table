export class CellModelResultOutput {
  result: number;
  row: string;
  columnNumber: number;

  constructor(
    result: number,
    row: string,
    columnNumber: number,
  ) {

    this.result = result;
    this.row = row;
    this.columnNumber = columnNumber;
  }
}
