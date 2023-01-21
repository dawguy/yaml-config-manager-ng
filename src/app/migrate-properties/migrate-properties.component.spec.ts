import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MigratePropertiesComponent } from './migrate-properties.component';

describe('MigratePropertiesComponent', () => {
  let component: MigratePropertiesComponent;
  let fixture: ComponentFixture<MigratePropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MigratePropertiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MigratePropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
