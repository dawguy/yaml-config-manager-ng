import { Component, OnInit } from '@angular/core';
import {EnvService} from "../env.service";
import {Env} from "../domain/Env";
import {FileInfoService} from "../file-info.service";
import {FileInfo} from "../domain/FileInfo";
import {FileInfoDetailsComponent} from "../file-info-details/file-info-details.component";

@Component({
  selector: 'app-file-explorer',
  templateUrl: './file-explorer.component.html',
  styleUrls: ['./file-explorer.component.css']
})
export class FileExplorerComponent implements OnInit {

  envs: Env[] = [];
  selectedEnv?: Env;
  fileInfos: FileInfo[] = [];

  constructor(private envService: EnvService,
              private fileInfosService: FileInfoService) { }

  ngOnInit(): void {
    this.envService.getEnvs()
      .subscribe((envs) => {
        this.envs = envs;
      })
  }

  onSelect(e: Env): void {
    this.selectedEnv = e;
    this.fileInfosService.getFileInfos(e.name)
      .subscribe((fileInfos) => {
        this.fileInfos = fileInfos;
      });
  }

}
