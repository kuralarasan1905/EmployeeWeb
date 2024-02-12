import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddDepartmentComponent } from './edit-add-department.component';

describe('EditAddDepartmentComponent', () => {
  let component: EditAddDepartmentComponent;
  let fixture: ComponentFixture<EditAddDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAddDepartmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAddDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
