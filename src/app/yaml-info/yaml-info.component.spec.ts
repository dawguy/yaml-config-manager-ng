import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YamlInfoComponent } from './yaml-info.component';

describe('YamlInfoComponent', () => {
  let component: YamlInfoComponent;
  let fixture: ComponentFixture<YamlInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YamlInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YamlInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
