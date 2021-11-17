import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPdfReportsComponent } from './view-pdf-reports.component';

describe('ViewPdfReportsComponent', () => {
  let component: ViewPdfReportsComponent;
  let fixture: ComponentFixture<ViewPdfReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPdfReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPdfReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
