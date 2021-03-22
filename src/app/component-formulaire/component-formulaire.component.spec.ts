import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentFormulaireComponent } from './component-formulaire.component';

describe('ComponentFormulaireComponent', () => {
  let component: ComponentFormulaireComponent;
  let fixture: ComponentFixture<ComponentFormulaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentFormulaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentFormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
