import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FileInfoDetailsComponent} from "./file-info-details/file-info-details.component";
import {FileExplorerComponent} from "./file-explorer/file-explorer.component";

const routes: Routes = [
  {path: 'fileInfo/:name', component: FileInfoDetailsComponent},
  {path: 'envs', component: FileExplorerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
