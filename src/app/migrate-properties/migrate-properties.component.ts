import { Component, OnInit } from '@angular/core';
import {EnvService} from "../env.service";
import {LogService} from "../log.service";
import {Env} from "../domain/Env";
import {from} from "rxjs";
import {PropertyService} from "../property.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-migrate-properties',
  templateUrl: './migrate-properties.component.html',
  styleUrls: ['./migrate-properties.component.css']
})
export class MigratePropertiesComponent implements OnInit {

  envs?: Env[];
  selectedFromEnv?: Env;
  selectedToEnv?: Env;
  updated: boolean = false;

  constructor(private envService: EnvService,
              private propertyService: PropertyService,
              private route: Router,
              private LOGGER: LogService) { }

  ngOnInit(): void {
    this.envService.getEnvs()
      .subscribe({next: envs => this.envs = envs});
  }

  onSelectFromEnv(fromEnv: Env): void {
    if(fromEnv === this.selectedFromEnv){
      delete this.selectedFromEnv
    } else {
      this.selectedFromEnv = fromEnv;
    }
  }

  onSelectToEnv(toEnv: Env): void {
    if(toEnv === this.selectedToEnv){
      delete this.selectedToEnv
    } else {
      this.selectedToEnv = toEnv;
    }
  }

  migrate(): void {
    if(this.selectedFromEnv && this.selectedToEnv){
      if(this.selectedFromEnv == this.selectedToEnv){
        alert("Can not migrate to the same environment. Selection: " + this.selectedFromEnv.name + " to " + this.selectedToEnv.name);
      } else {
        const toEnv = this.selectedToEnv.name;
        this.propertyService.migrateProperties(this.selectedFromEnv.name, this.selectedToEnv.name)
          .subscribe({next: (fileInfos) => {
            localStorage.setItem("selectedEnv", toEnv);
            this.updated = true;
            delete this.selectedFromEnv;
            delete this.selectedToEnv;
            setTimeout(() => {
              this.route.navigate(["/envs"])
            }, 500)
          }});
      }
    }
  }
}
