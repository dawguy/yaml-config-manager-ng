import {Component, Input, OnInit} from '@angular/core';
import {FileInfoService} from "../file-info.service";
import {FileInfo} from "../domain/FileInfo";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {LogService} from "../log.service";
import {filter, flatMap, from, map, mergeMap, toArray} from "rxjs";

@Component({
  selector: 'app-file-info-details',
  templateUrl: './file-info-details.component.html',
  styleUrls: ['./file-info-details.component.css']
})
export class FileInfoDetailsComponent implements OnInit {

  @Input() fileInfo?: FileInfo;
  @Input() environmentAsTitle?: boolean = false;
  @Input() displayYaml: boolean = true;
  @Input() displaySpringProperties: boolean = true;

  constructor(private fileInfoService: FileInfoService,
              private route: ActivatedRoute,
              private LOGGER: LogService) { }

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name');
    const env = this.route.snapshot.paramMap.get('env');

    if(!this.fileInfo && name != null && env != null) {
      this.fileInfoService.getFileInfo(name)
        .pipe(
          mergeMap((fileInfos) => from(fileInfos)),
          filter(fileInfo => fileInfo.env == env),
          toArray())
        .subscribe(fileInfo => {
          this.LOGGER.info(fileInfo.toString());
          this.fileInfo = fileInfo[0];
        });
    }
  }
}
