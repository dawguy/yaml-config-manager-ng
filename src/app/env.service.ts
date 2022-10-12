import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Env} from "./Env";
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
    return new Observable<Env[]>(subscriber => {
      this.http.get<EnvResponse>("http://localhost:3000/get-envs", this.httpOptions)
        .subscribe(resp => {
          subscriber.next(resp.body.map(s => {
            const env = {name: s};
            return env as Env;
          }));
          subscriber.complete();
        })
    })
  }
}
