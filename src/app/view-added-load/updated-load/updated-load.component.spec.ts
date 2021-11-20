import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedLoadComponent } from './updated-load.component';

describe('UpdatedLoadComponent', () => {
  let component: UpdatedLoadComponent;
  let fixture: ComponentFixture<UpdatedLoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatedLoadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
