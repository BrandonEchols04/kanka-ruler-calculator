import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulerCalculatorComponent } from './ruler-calculator.component';

describe('RulerCalculatorComponent', () => {
  let component: RulerCalculatorComponent;
  let fixture: ComponentFixture<RulerCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RulerCalculatorComponent]
    });
    fixture = TestBed.createComponent(RulerCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
