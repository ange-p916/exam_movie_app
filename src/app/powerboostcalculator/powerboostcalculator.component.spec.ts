import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerboostcalculatorComponent } from './powerboostcalculator.component';

describe('PowerboostcalculatorComponent', () => {
  let component: PowerboostcalculatorComponent;
  let fixture: ComponentFixture<PowerboostcalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerboostcalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerboostcalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
