import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastCaseInfoComponent } from './last-case-info.component';

describe('LastCaseInfoComponent', () => {
  let component: LastCaseInfoComponent;
  let fixture: ComponentFixture<LastCaseInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastCaseInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastCaseInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
