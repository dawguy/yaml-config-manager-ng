import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyPropertiesComponent } from './apply-properties.component';

describe('ApplyPropertiesComponent', () => {
  let component: ApplyPropertiesComponent;
  let fixture: ComponentFixture<ApplyPropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyPropertiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplyPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
