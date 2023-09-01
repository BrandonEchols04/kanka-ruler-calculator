import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {RulerCalculatorComponent} from "./ruler-calculator/ruler-calculator.component";

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule, FormsModule],
    declarations: [AppComponent, RulerCalculatorComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'kankaRulerCalculator'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('kankaRulerCalculator');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    let sut = compiled.querySelector('#titleDiv').textContent;
    expect(sut).toContain('kankaRulerCalculator');
  });

});
