import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulerCalculatorComponent } from './ruler-calculator.component';
import {FormsModule} from "@angular/forms";
import {AppComponent} from "../app.component";

describe('RulerCalculatorComponent', () => {
  let component: RulerCalculatorComponent;
  let fixture: ComponentFixture<RulerCalculatorComponent>;
  let sut: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [RulerCalculatorComponent]
    });
    fixture = TestBed.createComponent(RulerCalculatorComponent);
    component = fixture.componentInstance;
    sut = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Kanka Ruler Calculation'`, () => {
    expect(component.title).toEqual('Kanka Ruler Calculator');
  });

  it('should render title', () => {
    let actual = sut.querySelector('#title').textContent;
    expect(actual).toContain('Kanka Ruler Calculator');
  });

  describe('should calculate the ', () => {
    it('should return 0.0456 when given 1700px, 155 units, and Max Zoom 1', () => {
      //arrange
      component.mapWidthPixels = 1700;
      component.mapWidthDesired = 155;
      component.maxZoom = 1;
      //act
      component.calculateDistanceMeasurment();
      //assert
      expect(component.distanceMeasurement).toEqual(0.0456);
    })
  })
});
