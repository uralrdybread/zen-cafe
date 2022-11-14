import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationcontactComponent } from './locationcontact.component';

describe('LocationcontactComponent', () => {
  let component: LocationcontactComponent;
  let fixture: ComponentFixture<LocationcontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationcontactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
