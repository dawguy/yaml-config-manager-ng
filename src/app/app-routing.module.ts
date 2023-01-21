import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EnvExplorerComponent} from "./env-explorer/env-explorer.component";
import {FileComparerComponent} from "./file-comparer/file-comparer.component";
import {FileInfoDetailsComponent} from "./file-info-details/file-info-details.component";
import {ApplyPropertiesComponent} from "./apply-properties/apply-properties.component";
import {MigratePropertiesComponent} from "./migrate-properties/migrate-properties.component";

const routes: Routes = [
  {path: 'fileInfo/:env/:name', component: FileInfoDetailsComponent},
  {path: 'comparer/:name', component: FileComparerComponent},
  {path: 'compare', component: FileComparerComponent},
  {path: 'envs', component: EnvExplorerComponent},
  {path: 'apply', component: ApplyPropertiesComponent},
  {path: 'migrate', component: MigratePropertiesComponent},
  {path: '', component: EnvExplorerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
