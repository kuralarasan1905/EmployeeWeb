import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentviewComponent } from './departmentview.component';

describe('DepartmentviewComponent', () => {
  let component: DepartmentviewComponent;
  let fixture: ComponentFixture<DepartmentviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
