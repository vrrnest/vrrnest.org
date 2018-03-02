import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FireProtectionSystemComponent } from './fire-protection-system.component';

describe('FireProtectionSystemComponent', () => {
  let component: FireProtectionSystemComponent;
  let fixture: ComponentFixture<FireProtectionSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FireProtectionSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FireProtectionSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
