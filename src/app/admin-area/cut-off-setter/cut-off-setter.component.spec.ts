import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CutOffSetterComponent } from './cut-off-setter.component';

describe('CutOffSetterComponent', () => {
  let component: CutOffSetterComponent;
  let fixture: ComponentFixture<CutOffSetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CutOffSetterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CutOffSetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
