import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PhotoModel } from 'src/app/shared/components/photo-board/photo.interface';
import { PhotoBoardService } from 'src/app/shared/components/photo-board/services/photo-board.service';
import {  faCircleNotch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {

  public photos$: Observable<PhotoModel[]>;
  public fa = {
    faCircleNotch
  }

  constructor(private photosService: PhotoBoardService) {
  }

  ngOnInit() {
    this.photos$ = this.photosService.getPhotos();
  }

}
