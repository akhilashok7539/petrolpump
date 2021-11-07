import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLoadQuantityComponent } from './add-load-quantity.component';

describe('AddLoadQuantityComponent', () => {
  let component: AddLoadQuantityComponent;
  let fixture: ComponentFixture<AddLoadQuantityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLoadQuantityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLoadQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
