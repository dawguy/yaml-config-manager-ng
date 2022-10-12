import {Component, Input, OnInit} from '@angular/core';
import {FileInfo} from "../FileInfo";

@Component({
  selector: 'app-yaml-info',
  templateUrl: './yaml-info.component.html',
  styleUrls: ['./yaml-info.component.css']
})
export class YamlInfoComponent implements OnInit {

  @Input() fileInfo?: FileInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
