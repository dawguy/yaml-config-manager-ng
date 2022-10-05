import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileComparerComponent } from './file-comparer.component';

describe('FileComparerComponent', () => {
  let component: FileComparerComponent;
  let fixture: ComponentFixture<FileComparerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileComparerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileComparerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
