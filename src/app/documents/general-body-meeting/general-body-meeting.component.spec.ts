import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralBodyMeetingComponent } from './general-body-meeting.component';

describe('GeneralBodyMeetingComponent', () => {
  let component: GeneralBodyMeetingComponent;
  let fixture: ComponentFixture<GeneralBodyMeetingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralBodyMeetingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralBodyMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
