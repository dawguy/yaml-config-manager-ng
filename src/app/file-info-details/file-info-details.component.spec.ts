import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileInfoDetailsComponent } from './file-info-details.component';

describe('FileInfoDetailsComponent', () => {
  let component: FileInfoDetailsComponent;
  let fixture: ComponentFixture<FileInfoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileInfoDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileInfoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
