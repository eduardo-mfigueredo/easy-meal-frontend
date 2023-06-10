import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMenuOptionComponent } from './delete-menu-option.component';

describe('DeleteMenuOptionComponent', () => {
  let component: DeleteMenuOptionComponent;
  let fixture: ComponentFixture<DeleteMenuOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteMenuOptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteMenuOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
