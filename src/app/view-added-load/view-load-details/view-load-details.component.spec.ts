import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLoadDetailsComponent } from './view-load-details.component';

describe('ViewLoadDetailsComponent', () => {
  let component: ViewLoadDetailsComponent;
  let fixture: ComponentFixture<ViewLoadDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewLoadDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLoadDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
