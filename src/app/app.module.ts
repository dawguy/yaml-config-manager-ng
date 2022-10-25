import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OperationsComponent } from './operations/operations.component';
import { FileInfoDetailsComponent } from './file-info-details/file-info-details.component';
import { FileExplorerComponent } from './file-explorer/file-explorer.component';
import { FileComparerComponent } from './file-comparer/file-comparer.component';
import { FilePropertiesComponent } from './file-properties/file-properties.component';
import { YamlInfoComponent } from './yaml-info/yaml-info.component';
import { SpringInfoComponent } from './spring-info/spring-info.component';
import { ApplyPropertiesComponent } from './apply-properties/apply-properties.component';
import { HttpClientModule } from '@angular/common/http';
import { YamlBlockComponent } from './yaml-block/yaml-block.component';

@NgModule({
  declarations: [
    AppComponent,
    OperationsComponent,
    FileInfoDetailsComponent,
    FileExplorerComponent,
    FileComparerComponent,
    FilePropertiesComponent,
    YamlInfoComponent,
    SpringInfoComponent,
    ApplyPropertiesComponent,
    YamlBlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
