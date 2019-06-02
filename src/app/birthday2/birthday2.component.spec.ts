import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Birthday2Component } from './birthday2.component';

describe('Birthday2Component', () => {
  let component: Birthday2Component;
  let fixture: ComponentFixture<Birthday2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Birthday2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Birthday2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
