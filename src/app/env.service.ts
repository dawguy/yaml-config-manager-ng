import { Injectable } from '@angular/core';
import {map, Observable} from "rxjs";
import {Env} from "./domain/Env";
import {EnvResponse} from "./env-response";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EnvService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders(),
  }

  getEnvs(): Observable<Env[]> {
    return this.http.get<EnvResponse>("http://localhost:3000/get-envs", this.httpOptions)
      .pipe(map((resp) => {
        return resp.body.map(s => {
          return {name: s} as Env;
        });
      }));
  }
}
