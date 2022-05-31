import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestBoxInfoComponent } from './request-box-info.component';

describe('RequestBoxInfoComponent', () => {
  let component: RequestBoxInfoComponent;
  let fixture: ComponentFixture<RequestBoxInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestBoxInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestBoxInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
