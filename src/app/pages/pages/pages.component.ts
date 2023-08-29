import {Component, Input} from '@angular/core';
import DataSources from "../../common/data_sources/data-sources";
import {TableData} from "../../components/table-data/data_table";
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
})
export class PagesComponent{
  @Input() index!:number
  tableDataList:TableData[] = new DataSources().pagesDataTable
}
