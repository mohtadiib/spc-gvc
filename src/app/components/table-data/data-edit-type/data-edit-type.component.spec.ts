import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataEditTypeComponent } from './data-edit-type.component';

describe('DataEditTypeComponent', () => {
  let component: DataEditTypeComponent;
  let fixture: ComponentFixture<DataEditTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataEditTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataEditTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
