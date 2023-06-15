import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSentDialogComponent } from './contact-sent-dialog.component';

describe('ContactSentDialogComponent', () => {
  let component: ContactSentDialogComponent;
  let fixture: ComponentFixture<ContactSentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactSentDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactSentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
