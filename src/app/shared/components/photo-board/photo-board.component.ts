import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { PhotoModel } from './photo.interface';

@Component({
  selector: 'app-photo-board',
  templateUrl: './photo-board.component.html',
  styleUrls: ['./photo-board.component.scss']
})
export class PhotoBoardComponent implements OnInit {

  @Input() public photos: PhotoModel[];

  public rows: any[][] = [];


  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.photos) {
      this.rows = this.groupColumns(changes.photos.currentValue);
    }
  }

  private groupColumns(photos: PhotoModel[]): any[][] {
    const newRows = [];
    const step = 4
    for (let index = 0; index < photos?.length; index += step) {
      newRows.push(photos.slice(index, index += step));
    }

    return newRows;
  }

}
