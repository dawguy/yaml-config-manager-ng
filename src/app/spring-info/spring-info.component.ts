import {Component, Input, OnInit} from '@angular/core';
import {FileInfo} from "../FileInfo";

@Component({
  selector: 'app-spring-info',
  templateUrl: './spring-info.component.html',
  styleUrls: ['./spring-info.component.css']
})
export class SpringInfoComponent implements OnInit {

  @Input() fileInfo?: FileInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
