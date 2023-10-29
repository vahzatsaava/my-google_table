import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CellRequest} from "./models/CellRequest";
import {CellModel} from "./models/CellModel";
import {Observable} from "rxjs";
import {TableModel} from "./models/TableModel";
import {CellModelResultOutput} from "./models/CellModelResultOutput";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseUrl = 'http://localhost:8083/api';

  constructor(private http: HttpClient) { }

  createCell(tableID: number, cellRequest: CellRequest): Observable<CellModel> {
    const url = `${this.baseUrl}/cells/create?tableID=${tableID}`;
    return this.http.post<CellModel>(url, cellRequest);
  }

  updateCellValue(cellRequest: CellRequest): Observable<CellModel> {
    const url = `${this.baseUrl}/cells/update`;
    return this.http.put<CellModel>(url, cellRequest);
  }

  getAllCellModels(name: string): Observable<CellModelResultOutput[]> {
    const url = `${this.baseUrl}/cells/all/${name}`;
    return this.http.get<CellModelResultOutput[]>(url);
  }

  createTable(tableName: string): Observable<TableModel> {
    const url = `${this.baseUrl}/tables?tableName=${tableName}`;
    return this.http.post<TableModel>(url, {});
  }
}
