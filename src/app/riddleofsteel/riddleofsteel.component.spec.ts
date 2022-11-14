import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiddleofsteelComponent } from './riddleofsteel.component';

describe('RiddleofsteelComponent', () => {
  let component: RiddleofsteelComponent;
  let fixture: ComponentFixture<RiddleofsteelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiddleofsteelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiddleofsteelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
