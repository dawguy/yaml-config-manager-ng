import {Component, Input, OnInit} from '@angular/core';
import {YamlProperty} from "../YamlProperty";

@Component({
  selector: 'app-yaml-block',
  templateUrl: './yaml-block.component.html',
  styleUrls: ['./yaml-block.component.css']
})
export class YamlBlockComponent implements OnInit {

  @Input() yamlProperty?: YamlProperty;

  constructor() { }

  ngOnInit(): void {
  }

}
