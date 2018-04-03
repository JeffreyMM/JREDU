import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Childmessage1Component } from './childmessage1.component';

describe('Childmessage1Component', () => {
  let component: Childmessage1Component;
  let fixture: ComponentFixture<Childmessage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Childmessage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Childmessage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
