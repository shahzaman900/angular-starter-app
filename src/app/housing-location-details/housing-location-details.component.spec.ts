import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousingLocationDetailsComponent } from './housing-location-details.component';

describe('HousingLocationDetailsComponent', () => {
  let component: HousingLocationDetailsComponent;
  let fixture: ComponentFixture<HousingLocationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HousingLocationDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HousingLocationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
