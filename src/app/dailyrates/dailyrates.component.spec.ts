import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyratesComponent } from './dailyrates.component';

describe('DailyratesComponent', () => {
  let component: DailyratesComponent;
  let fixture: ComponentFixture<DailyratesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyratesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyratesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
