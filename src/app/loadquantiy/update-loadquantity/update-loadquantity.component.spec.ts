import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLoadquantityComponent } from './update-loadquantity.component';

describe('UpdateLoadquantityComponent', () => {
  let component: UpdateLoadquantityComponent;
  let fixture: ComponentFixture<UpdateLoadquantityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateLoadquantityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateLoadquantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
