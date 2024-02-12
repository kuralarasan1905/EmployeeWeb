import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeviewComponent } from './employeeview.component';

describe('EmployeeviewComponent', () => {
  let component: EmployeeviewComponent;
  let fixture: ComponentFixture<EmployeeviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
