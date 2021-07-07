import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PhotoModel } from './shared/components/photo-board/photo.interface';
import { PhotoBoardService } from './shared/components/photo-board/services/photo-board.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular testing';
  public photos$: Observable<PhotoModel[]>;

  constructor(private photosService: PhotoBoardService) {
  }

  ngOnInit() {
  this.photos$ = this.photosService.getPhotos();
}
}
