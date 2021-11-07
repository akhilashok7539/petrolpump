import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadquantiyComponent } from './loadquantiy.component';

describe('LoadquantiyComponent', () => {
  let component: LoadquantiyComponent;
  let fixture: ComponentFixture<LoadquantiyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadquantiyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadquantiyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
