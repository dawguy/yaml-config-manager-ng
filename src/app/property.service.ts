import { Injectable } from '@angular/core';
import {LogService} from "./log.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {FileInfoResponse} from "./file-info-response";
import {map, Observable} from "rxjs";
import {FileInfo} from "./domain/FileInfo";

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private LOGGER: LogService,
              private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  updateProperty(property: string, env: string): Observable<FileInfo[]> {
    const data = {
      propertiesText: property,
      env: env,
    };
    return this.http.post<FileInfoResponse>("http://localhost:3000/apply-properties-env", data, this.httpOptions)
      .pipe(map((resp) => resp.body));
  }
}
