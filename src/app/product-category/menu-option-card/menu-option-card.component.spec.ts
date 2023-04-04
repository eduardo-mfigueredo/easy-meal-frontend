import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuOptionCardComponent } from './menu-option-card.component';

describe('MenuOptionCardComponent', () => {
  let component: MenuOptionCardComponent;
  let fixture: ComponentFixture<MenuOptionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuOptionCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuOptionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
