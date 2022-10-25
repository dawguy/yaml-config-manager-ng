import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YamlBlockComponent } from './yaml-block.component';

describe('YamlBlockComponent', () => {
  let component: YamlBlockComponent;
  let fixture: ComponentFixture<YamlBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YamlBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YamlBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
