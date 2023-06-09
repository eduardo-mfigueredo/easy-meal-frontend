import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMenuOptionComponent } from './add-menu-option.component';

describe('AddMenuOptionComponent', () => {
  let component: AddMenuOptionComponent;
  let fixture: ComponentFixture<AddMenuOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMenuOptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMenuOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
