import { Component, OnInit } from '@angular/core';
import {Env} from "../domain/Env";
import {EnvService} from "../env.service";
import {LogService} from "../log.service";
import {PropertyService} from "../property.service";

@Component({
  selector: 'app-apply-properties',
  templateUrl: './apply-properties.component.html',
  styleUrls: ['./apply-properties.component.css']
})
export class ApplyPropertiesComponent implements OnInit {

  envs: Env[] = [];
  selectedEnv?: Env;
  constructor(private envService: EnvService,
              private LOGGER: LogService,
              private propertyService: PropertyService) { }

  ngOnInit(): void {
    this.envService.getEnvs()
      .subscribe((envs) => {
        this.envs = envs;
      })
  }

  onSelect(e: Env): void {
    this.selectedEnv = e;
    this.LOGGER.info("Set env " + e.name);
  }

  applyFeatureFlag(): void {
    const propInput = <HTMLInputElement>document.getElementById('propInput');
    console.log(propInput);

    if(propInput && propInput.value !== '' && this.selectedEnv != null) {
      const propText = propInput.value;
      this.LOGGER.info("Prop text: " + propText);
      this.propertyService.updateProperty(propText, this.selectedEnv.name)
        .subscribe(next => {});
      propInput.value = "";
    }
  }

}
