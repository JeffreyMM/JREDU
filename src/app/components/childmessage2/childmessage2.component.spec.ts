import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Childmessage2Component } from './childmessage2.component';

describe('Childmessage2Component', () => {
  let component: Childmessage2Component;
  let fixture: ComponentFixture<Childmessage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Childmessage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Childmessage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
