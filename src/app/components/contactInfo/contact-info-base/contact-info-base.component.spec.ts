import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactInfoBaseComponent } from './contact-info-base.component';

describe('ContactInfoBaseComponent', () => {
  let component: ContactInfoBaseComponent;
  let fixture: ComponentFixture<ContactInfoBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactInfoBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactInfoBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
