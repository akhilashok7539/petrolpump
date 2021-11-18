import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPumpboyComponent } from './add-pumpboy.component';

describe('AddPumpboyComponent', () => {
  let component: AddPumpboyComponent;
  let fixture: ComponentFixture<AddPumpboyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPumpboyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPumpboyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
