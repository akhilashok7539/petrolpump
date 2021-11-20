import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAddedLoadComponent } from './view-added-load.component';

describe('ViewAddedLoadComponent', () => {
  let component: ViewAddedLoadComponent;
  let fixture: ComponentFixture<ViewAddedLoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAddedLoadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAddedLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
