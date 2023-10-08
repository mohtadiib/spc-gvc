import {Component, Input } from '@angular/core';
@Component({
  selector: 'app-data-show-type',
  templateUrl: './data-show-type.component.html',
  styleUrls: ['./data-show-type.component.css']
})
export class DataShowTypeComponent{
  @Input() header!: any;
  @Input() value!: any;
  @Input() record!: any;

  //Model
  isVisible = false;
  showModal(): void {
    this.isVisible = true;
  }
  handleCancel(): void {
    this.isVisible = false;
  }
}
