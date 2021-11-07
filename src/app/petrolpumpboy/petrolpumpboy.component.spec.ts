import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetrolpumpboyComponent } from './petrolpumpboy.component';

describe('PetrolpumpboyComponent', () => {
  let component: PetrolpumpboyComponent;
  let fixture: ComponentFixture<PetrolpumpboyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetrolpumpboyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetrolpumpboyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
