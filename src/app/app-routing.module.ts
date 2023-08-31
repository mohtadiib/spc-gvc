import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PagesComponent} from "./pages/pages/pages.component";
import {SideModel} from "./common/data_sources/side-model";
import DataSources from "./common/data_sources/data-sources";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: `${new DataSources().pagesDataTable[0].submenu[0].router}/0` /*'/courses/0'*/ },
  // { path: '**', redirectTo: '/courses/0' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  sideBarList: SideModel[] = new DataSources().pagesDataTable;
  constructor() {
    this.getRoute()
  }
  getRoute(com:any = PagesComponent){
    this.sideBarList[0].submenu.forEach(value => {
      if (value.component){
        routes.push({path:value.path,component:value.component})
      }else {
        routes.push({path:value.path,component:com})
      }
    })
  }
}
