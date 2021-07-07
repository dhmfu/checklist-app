import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewChecklistContainerComponent } from './new-checklist-container.component';

describe('NewChecklistContainerComponent', () => {
  let component: NewChecklistContainerComponent;
  let fixture: ComponentFixture<NewChecklistContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewChecklistContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewChecklistContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
