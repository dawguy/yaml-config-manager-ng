import { Injectable } from '@angular/core';
import {from, map, Observable, of, tap} from "rxjs";
import {FileInfo} from "./domain/FileInfo";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {FileInfoResponse} from "./file-info-response";
import {EnvResponse} from "./env-response";

@Injectable({
  providedIn: 'root'
})
export class FileInfoService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  getFileNames(): Observable<string[]> {
    return this.http.get<EnvResponse>("http://localhost:3000/get-file-names", this.httpOptions)
      .pipe(map((resp) => resp.body))
  }

  getFileInfo(fileName: string) : Observable<FileInfo[]> {
    const data = {
      fileName: fileName,
    };

    return this.http.post<FileInfoResponse>("http://localhost:3000/get-file-info-by-name", data, this.httpOptions)
        .pipe(map((resp) => resp.body));
  }

  getFileInfos(environment: string) : Observable<FileInfo[]> {
    const data = {
      env: environment,
    };

    return this.http.post<FileInfoResponse>("http://localhost:3000/get-file-info-env", data, this.httpOptions)
      .pipe(map((resp) => resp.body));
  }
}
