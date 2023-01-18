import {Component, Input, OnInit} from '@angular/core';
import {FileInfoService} from "../file-info.service";
import {FileInfo} from "../domain/FileInfo";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {LogService} from "../log.service";

@Component({
  selector: 'app-file-info-details',
  templateUrl: './file-info-details.component.html',
  styleUrls: ['./file-info-details.component.css']
})
export class FileInfoDetailsComponent implements OnInit {

  @Input() fileInfo?: FileInfo;
  @Input() displayYaml: boolean = true;
  @Input() displaySpringProperties: boolean = true;

  constructor(private fileInfoService: FileInfoService,
              private route: ActivatedRoute,
              private LOGGER: LogService) { }

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name');

    if(!this.fileInfo && name != null) {
      this.fileInfoService.getFileInfo(name)
        .subscribe(fileInfo => {
          this.LOGGER.info(fileInfo.toString());
          this.fileInfo = fileInfo[0];
        });
    }
  }

}
