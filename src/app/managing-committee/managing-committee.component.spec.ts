import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagingCommitteeComponent } from './managing-committee.component';

describe('ManagingCommitteeComponent', () => {
  let component: ManagingCommitteeComponent;
  let fixture: ComponentFixture<ManagingCommitteeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagingCommitteeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagingCommitteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
