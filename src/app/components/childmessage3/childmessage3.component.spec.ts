import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Childmessage3Component } from './childmessage3.component';

describe('Childmessage3Component', () => {
  let component: Childmessage3Component;
  let fixture: ComponentFixture<Childmessage3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Childmessage3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Childmessage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
