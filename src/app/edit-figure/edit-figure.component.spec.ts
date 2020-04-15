import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFigureComponent } from './edit-figure.component';

describe('EditFigureComponent', () => {
  let component: EditFigureComponent;
  let fixture: ComponentFixture<EditFigureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFigureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFigureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
