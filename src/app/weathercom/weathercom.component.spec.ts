import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeathercomComponent } from './weathercom.component';

describe('WeathercomComponent', () => {
  let component: WeathercomComponent;
  let fixture: ComponentFixture<WeathercomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeathercomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeathercomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
