import { Injectable } from '@angular/core';
import {YamlProperty} from "./domain/YamlProperty";

@Injectable({
  providedIn: 'root'
})
export class YamlService {

  constructor() { }

  parse(json: any): YamlProperty[] {
    const parsedYaml = this.parseHelper(json);
    console.log(parsedYaml);
    return parsedYaml;
  }

  parseHelper(json: any): YamlProperty[] {
    if(typeof json != "object"){
      return [];
    }

    const keys = Object.keys(json);

    return keys.map(k => {
      const children = this.parseHelper(json[k]);

      return {
        key: k,
        val: json[k],
        children: children
      } as YamlProperty;
    });
}

}
