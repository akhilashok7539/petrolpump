import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStockdetailsComponent } from './update-stockdetails.component';

describe('UpdateStockdetailsComponent', () => {
  let component: UpdateStockdetailsComponent;
  let fixture: ComponentFixture<UpdateStockdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateStockdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateStockdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
