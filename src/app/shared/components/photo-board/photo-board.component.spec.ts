
import { Component, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoBoardComponent } from './photo-board.component';
import { PhotoBoardModule } from './photo-board.module';
import { PhotoModel } from './photo.interface';
import { buildPhotoList } from './test/build-photo-list';

describe(PhotoBoardComponent.name, () => {
  let fixture: ComponentFixture<PhotoBoardComponent>;
  let fixtureFake: ComponentFixture<PhotoBoardTestComponent>;
  let component: PhotoBoardComponent;
  let componentFake: PhotoBoardTestComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhotoBoardTestComponent],
      imports: [PhotoBoardModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoBoardComponent);
    fixtureFake = TestBed.createComponent(PhotoBoardTestComponent);
    component = fixture.componentInstance;
    componentFake = fixtureFake.componentInstance;
  });

  it(`Should display rows and columns when (@Input photos) has value`, () => {
    component.photos = buildPhotoList();
    fixture.detectChanges();
    const change: SimpleChanges = {
      photos: new SimpleChange([], component.photos, true)
    };
    component.ngOnChanges(change);
    expect(component.rows.length)
      .withContext('Number of rows')
      .toBe(2);
    expect(component.rows[0].length)
      .withContext('Number of columns from the first row')
      .toBe(4);
    expect(component.rows[1].length)
      .withContext('Number of columns from the second row')
      .toBe(4);
  });

  it(`FAKE Should display rows and columns when (@Input photos) has value`, () => {
    componentFake.photos = buildPhotoList();
    fixtureFake.detectChanges();

    expect(componentFake.board.rows.length)
      .withContext('Number of rows')
      .toBe(2);
    expect(componentFake.board.rows[0].length)
      .withContext('Number of columns from the first row')
      .toBe(4);
    expect(componentFake.board.rows[1].length)
      .withContext('Number of columns from the second row')
      .toBe(4);
  });
});

@Component({
  template: `<app-photo-board
          [photos]="photos">
        </app-photo-board>`
})
class PhotoBoardTestComponent {
  @ViewChild(PhotoBoardComponent) public board: PhotoBoardComponent;
  public photos: PhotoModel[] = [];
}

