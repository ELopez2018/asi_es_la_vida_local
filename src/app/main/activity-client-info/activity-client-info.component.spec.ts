import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityClientInfoComponent } from './activity-client-info.component';

describe('ActivityClientInfoComponent', () => {
  let component: ActivityClientInfoComponent;
  let fixture: ComponentFixture<ActivityClientInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityClientInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityClientInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
