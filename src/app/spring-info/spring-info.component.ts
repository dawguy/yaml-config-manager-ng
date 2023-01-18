import {Component, Input, OnInit} from '@angular/core';
import {FileInfo} from "../domain/FileInfo";
import {SpringProperty} from "../domain/SpringProperty";

@Component({
  selector: 'app-spring-info',
  templateUrl: './spring-info.component.html',
  styleUrls: ['./spring-info.component.css']
})
export class SpringInfoComponent implements OnInit {

  @Input() springProperties: SpringProperty[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
