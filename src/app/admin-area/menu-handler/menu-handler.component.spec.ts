import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuHandlerComponent } from './menu-handler.component';

describe('MenuHandlerComponent', () => {
  let component: MenuHandlerComponent;
  let fixture: ComponentFixture<MenuHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuHandlerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
