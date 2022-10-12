import { Component, OnInit } from '@angular/core';
import {EnvService} from "../env.service";
import {Env} from "../Env";

@Component({
  selector: 'app-file-explorer',
  templateUrl: './file-explorer.component.html',
  styleUrls: ['./file-explorer.component.css']
})
export class FileExplorerComponent implements OnInit {

  envs: Env[] = [];

  constructor(private envService: EnvService) { }

  ngOnInit(): void {
    this.envService.getEnvs()
      .subscribe((envs) => {
        this.envs = envs;
      })
  }

}
