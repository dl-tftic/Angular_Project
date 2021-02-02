import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressBaseComponent } from './address-base.component';

describe('AddressBaseComponent', () => {
  let component: AddressBaseComponent;
  let fixture: ComponentFixture<AddressBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
