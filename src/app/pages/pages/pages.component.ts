import {Component, OnInit} from '@angular/core';
import DataSources from "../../common/data_sources/data-sources";
import {ActivatedRoute} from "@angular/router";
import {SideModel, TableData} from "../../common/data_sources/side-model";
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
})
export class PagesComponent implements OnInit{
  // @Input() index!:number
  index!:number
  sideBarList: any[] = new DataSources().pagesDataTable;
  tableData: TableData = {}
  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params:any) => {
      this.index = params.get('index');
      this.tableData = this.sideBarList[this.index].tableData
    });
  }
}
