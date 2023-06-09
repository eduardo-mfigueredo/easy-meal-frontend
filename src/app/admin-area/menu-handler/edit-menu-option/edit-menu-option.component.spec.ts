import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMenuOptionComponent } from './edit-menu-option.component';

describe('EditMenuOptionComponent', () => {
  let component: EditMenuOptionComponent;
  let fixture: ComponentFixture<EditMenuOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMenuOptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditMenuOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
