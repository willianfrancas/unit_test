import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { PhotoModel } from '../photo.interface';
const baseUrl = 'http://localhost:3000/photos';
@Injectable({
  providedIn: 'root'
})
export class PhotoBoardService {

  constructor(private http: HttpClient) { }

  public getPhotos(): Observable<PhotoModel[]> {

    return this.http.get<PhotoModel[]>(`${baseUrl}`)
      .pipe(map(photos => {
        return photos.map(photo => {
          return { ...photo, description: photo.description.toUpperCase() }
        });
      }))
      // .pipe(tap(photos => console.log(photos)))
      .pipe(delay(2000));

  }
}
