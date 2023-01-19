import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {FileInfo} from "../domain/FileInfo";
import {YamlProperty} from "../domain/YamlProperty";
import {YamlService} from "../yaml.service";

@Component({
  selector: 'app-yaml-info',
  templateUrl: './yaml-info.component.html',
  styleUrls: ['./yaml-info.component.css']
})
export class YamlInfoComponent implements OnInit {

  @Input() fileInfo?: FileInfo;
  yamlProperties: YamlProperty[] = [];

  constructor(private yamlService: YamlService) { }

  ngOnInit(): void {
    if(this.fileInfo) {
      this.yamlProperties = this.yamlService.parse(this.fileInfo.yaml);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.fileInfo) {
      const fileInfo: FileInfo = changes['fileInfo'].currentValue;
      console.log(changes, fileInfo.yaml);
      this.yamlProperties = this.yamlService.parse(fileInfo.yaml);
    }
  }

  copy(yamlProperties: YamlProperty[]): void {
    const yaml = yamlProperties.map(yamlProperty => this.copyHelper(yamlProperty, ""));
    const yamlVals = yaml.join("\r\n");
    navigator.clipboard.writeText(yamlVals);
  }

  private copyHelper(yamlProperty: YamlProperty, spaces: string): string {
    const children = yamlProperty.children ? yamlProperty.children : [];
    const val = typeof yamlProperty.val !== 'object' ? spaces + yamlProperty.key + ": " + yamlProperty.val:
                                                       spaces + yamlProperty.key + ":";

    if(children.length > 0){
      return [
        val
      ].concat(children.map(child => this.copyHelper(child, spaces + "  "))).join("\r\n");
    } else {
      return val;
    }
  }
}
