import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificationItemComponent } from './modification-item.component';

describe('ModificationItemComponent', () => {
  let component: ModificationItemComponent;
  let fixture: ComponentFixture<ModificationItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificationItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
