import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosSideComponent } from './pos-side.component';

describe('PosSideComponent', () => {
  let component: PosSideComponent;
  let fixture: ComponentFixture<PosSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosSideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PosSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
