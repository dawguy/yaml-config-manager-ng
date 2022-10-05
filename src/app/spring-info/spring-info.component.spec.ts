import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringInfoComponent } from './spring-info.component';

describe('SpringInfoComponent', () => {
  let component: SpringInfoComponent;
  let fixture: ComponentFixture<SpringInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpringInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpringInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
