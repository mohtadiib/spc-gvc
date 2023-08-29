import { NgModule } from '@angular/core';
import {TableDataComponent} from "./table-data.component";
import {CommonModule} from "@angular/common";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzTableModule} from "ng-zorro-antd/table";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NzPopconfirmModule} from "ng-zorro-antd/popconfirm";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {TableDataRoutingModule} from "./table-data-routing.module";
import {NzTagModule} from "ng-zorro-antd/tag";
import {DataShowTypeComponent} from "./data-show-type/data-show-type.component";
import {DataEditTypeComponent} from "./data-edit-type/data-edit-type.component";
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzModalModule} from "ng-zorro-antd/modal";
import {TeachersComponent} from "../../pages/teachers/teachers.component";
import {ViewTeacherComponent} from "../../pages/teachers/view-teacher/view-teacher.component";
import {UserInfoComponent} from "../user-info/user-info.component";
import {ProfileComponent} from "../../pages/teachers/view-teacher/profile/profile.component";
import {NzTabsModule} from "ng-zorro-antd/tabs";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzSkeletonModule} from "ng-zorro-antd/skeleton";
import {NzAvatarModule} from "ng-zorro-antd/avatar";
import {PagesComponent} from "../../pages/pages/pages.component";


@NgModule({
  imports: [
    CommonModule,
    TableDataRoutingModule,
    NzButtonModule,
    NzTableModule,
    FormsModule,
    NzPopconfirmModule,
    NzInputModule,
    NzIconModule,
    NzDividerModule,
    NzTagModule,
    NzSelectModule,
    NzModalModule,
    ReactiveFormsModule,
    NzTabsModule,
    NzCardModule,
    NzSkeletonModule,
    NzAvatarModule,
  ],
  declarations: [
    TableDataComponent,
    DataShowTypeComponent,
    DataEditTypeComponent,
    TeachersComponent,
    ViewTeacherComponent,
    UserInfoComponent,
    ProfileComponent,
    PagesComponent
  ],
  exports: [
    TableDataComponent,
    DataShowTypeComponent,
    DataEditTypeComponent,
    TeachersComponent,
    ViewTeacherComponent,
    UserInfoComponent,
    ProfileComponent,
    PagesComponent
  ]
})
export class TableDataModule { }
