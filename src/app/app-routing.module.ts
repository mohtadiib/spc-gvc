import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ViewTeacherComponent} from "./pages/teachers/view-teacher/view-teacher.component";
import {PagesComponent} from "./pages/pages/pages.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/classes' },
  { path: 'courses', component: PagesComponent },
  { path: 'classes', component: PagesComponent },
  { path: 'teachers', component: PagesComponent },
  { path: 'view_teacher/:id', component: ViewTeacherComponent },
  { path: 'subjects', component: PagesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
