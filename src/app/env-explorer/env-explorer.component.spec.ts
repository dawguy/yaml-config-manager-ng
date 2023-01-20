import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvExplorerComponent } from './env-explorer.component';

describe('FileExplorerComponent', () => {
  let component: EnvExplorerComponent;
  let fixture: ComponentFixture<EnvExplorerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvExplorerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnvExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
