import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataShowTypeComponent } from './data-show-type.component';

describe('DataShowTypeComponent', () => {
  let component: DataShowTypeComponent;
  let fixture: ComponentFixture<DataShowTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataShowTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataShowTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
