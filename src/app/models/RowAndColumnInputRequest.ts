export class RowAndColumnInputRequest {
  row: string;
  columnNumber: number;

  constructor(row: string, columnNumber: number) {
    this.row = row;
    this.columnNumber = columnNumber;
  }
}
