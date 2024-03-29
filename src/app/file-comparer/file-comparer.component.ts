import {Component, Input, OnInit} from '@angular/core';
import {FileInfo} from "../domain/FileInfo";
import {FileInfoService} from "../file-info.service";
import {ActivatedRoute} from "@angular/router";
import {LogService} from "../log.service";
import {YamlProperty} from "../domain/YamlProperty";

@Component({
  selector: 'app-file-comparer',
  templateUrl: './file-comparer.component.html',
  styleUrls: ['./file-comparer.component.css']
})
export class FileComparerComponent implements OnInit {

  fileInfos?: FileInfo[];
  fileNames?: string[];
  selectedFileName?: string;

  constructor(private fileInfoService: FileInfoService,
              private route: ActivatedRoute,
              private LOGGER: LogService) { }

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name');

    this.fileInfoService.getFileNames()
      .subscribe(fileNames => {
        this.fileNames = fileNames;
      })

    if(this.fileInfos == null && name != null) {
      this.fileInfoService.getFileInfo(name)
        .subscribe(fileInfos => {
          this.fileInfos = fileInfos;
        });
    } else {
      this.LOGGER.info("Invalid file info : " + name);
    }
  }

  onSelect(fileName: string): void {
    if(fileName != null) {
      this.selectedFileName = fileName;
      this.fileInfoService.getFileInfo(fileName)
        .subscribe(fileInfos => {
          this.fileInfos = fileInfos;
        });
    } else {
      this.LOGGER.info("Invalid file info : " + fileName);
    }
  }
}
