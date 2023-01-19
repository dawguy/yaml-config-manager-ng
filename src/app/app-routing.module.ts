import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FileExplorerComponent} from "./file-explorer/file-explorer.component";
import {FileComparerComponent} from "./file-comparer/file-comparer.component";
import {FileInfoDetailsComponent} from "./file-info-details/file-info-details.component";

const routes: Routes = [
  {path: 'fileInfo/:env/:name', component: FileInfoDetailsComponent},
  {path: 'comparer/:name', component: FileComparerComponent},
  {path: 'envs', component: FileExplorerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
