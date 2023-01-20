import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EnvExplorerComponent} from "./env-explorer/env-explorer.component";
import {FileComparerComponent} from "./file-comparer/file-comparer.component";
import {FileInfoDetailsComponent} from "./file-info-details/file-info-details.component";

const routes: Routes = [
  {path: 'fileInfo/:env/:name', component: FileInfoDetailsComponent},
  {path: 'comparer/:name', component: FileComparerComponent},
  {path: 'compare', component: FileComparerComponent},
  {path: 'envs', component: EnvExplorerComponent},
  {path: '', component: EnvExplorerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
