import { Injectable } from '@angular/core';
import {map, Observable} from "rxjs";
import {Env} from "./domain/Env";
import {EnvResponse} from "./env-response";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EnvService {

  selectedEnv?: Env;

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders(),
  }

  getSelectedEnv(): Env | undefined {
    const selectedEnv = localStorage.getItem("selectedEnv")
    return {name: selectedEnv} as Env;
  }

  setSelectedEnv(env?: Env): void {
    if(env){
      localStorage.setItem("selectedEnv", env.name);
    } else {
      localStorage.removeItem("selectedEnv");
    }
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
