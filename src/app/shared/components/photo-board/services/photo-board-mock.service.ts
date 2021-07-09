import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { PhotoModel } from "../photo.interface";
import { buildPhotoList } from "../test/build-photo-list";
import { PhotoBoardService } from "./photo-board.service";

@Injectable({
  providedIn: 'root'
})
export class PhotoBoardMockService extends PhotoBoardService {

  public getPhotos(): Observable<PhotoModel[]> {

    return of(buildPhotoList());

  }
}
