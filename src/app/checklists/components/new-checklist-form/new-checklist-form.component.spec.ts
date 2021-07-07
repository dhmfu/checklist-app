import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewChecklistFormComponent } from './new-checklist-form.component';

describe('NewChecklistFormComponent', () => {
  let component: NewChecklistFormComponent;
  let fixture: ComponentFixture<NewChecklistFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewChecklistFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewChecklistFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
