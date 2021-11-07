import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFuelRatesComponent } from './update-fuel-rates.component';

describe('UpdateFuelRatesComponent', () => {
  let component: UpdateFuelRatesComponent;
  let fixture: ComponentFixture<UpdateFuelRatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFuelRatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFuelRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
