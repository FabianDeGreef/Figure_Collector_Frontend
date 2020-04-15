import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFigureComponent } from './add-figure.component';

describe('AddFigureComponent', () => {
  let component: AddFigureComponent;
  let fixture: ComponentFixture<AddFigureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFigureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFigureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
