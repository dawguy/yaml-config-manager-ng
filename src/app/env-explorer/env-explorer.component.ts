import { Component, OnInit } from '@angular/core';
import {EnvService} from "../env.service";
import {Env} from "../domain/Env";
import {FileInfoService} from "../file-info.service";
import {FileInfo} from "../domain/FileInfo";
import {FileInfoDetailsComponent} from "../file-info-details/file-info-details.component";
import {LogService} from "../log.service";

@Component({
  selector: 'app-env-explorer',
  templateUrl: './env-explorer.component.html',
  styleUrls: ['./env-explorer.component.css']
})
export class EnvExplorerComponent implements OnInit {

  envs: Env[] = [];
  selectedEnv?: Env;
  fileInfos: FileInfo[] = [];

  constructor(private envService: EnvService,
              private fileInfosService: FileInfoService,
              private LOGGER: LogService) { }

  ngOnInit(): void {
    this.envService.getEnvs()
      .subscribe((envs) => {
        this.envs = envs;
      });
    const selectedEnv = this.envService.getSelectedEnv();
    if(selectedEnv){
      this.LOGGER.info("Get env " + selectedEnv.name);
      this.onSelect(selectedEnv);
    } else {
      this.LOGGER.info("Get env missing");
    }
  }

  onSelect(e: Env): void {
    this.selectedEnv = e;
    this.envService.setSelectedEnv(e);
    this.LOGGER.info("Set env " + this.selectedEnv.name);
    this.fileInfosService.getFileInfos(e.name)
      .subscribe((fileInfos) => {
        this.fileInfos = fileInfos;
      });
  }
}
