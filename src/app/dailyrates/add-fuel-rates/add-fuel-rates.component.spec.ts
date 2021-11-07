import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFuelRatesComponent } from './add-fuel-rates.component';

describe('AddFuelRatesComponent', () => {
  let component: AddFuelRatesComponent;
  let fixture: ComponentFixture<AddFuelRatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFuelRatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFuelRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
