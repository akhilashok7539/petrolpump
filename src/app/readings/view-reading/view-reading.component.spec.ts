import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewReadingComponent } from './view-reading.component';

describe('ViewReadingComponent', () => {
  let component: ViewReadingComponent;
  let fixture: ComponentFixture<ViewReadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewReadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewReadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
