import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { PhotoModel } from 'src/app/shared/components/photo-board/photo.interface';
import { PhotoBoardMockService } from 'src/app/shared/components/photo-board/services/photo-board-mock.service';
import { PhotoBoardService } from 'src/app/shared/components/photo-board/services/photo-board.service';
import { buildPhotoList } from 'src/app/shared/components/photo-board/test/build-photo-list';
import { PhotoListComponent } from './photo-list.component';
import { PhotoListModule } from './photo-list.module';

describe(`${PhotoListComponent} - Mock Provider`, () => {
  let component: PhotoListComponent;
  let fixture: ComponentFixture<PhotoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PhotoListModule,
        HttpClientTestingModule
      ],
      providers: [
        {
          provide: PhotoBoardService,
          useClass: PhotoBoardMockService,
          // useValue: {
          //   getPhotos(): Observable<PhotoModel[]> {
          //     return of(buildPhotoList());
          //   }
          // }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoListComponent);
    component = fixture.componentInstance;

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(D) should display board when data arrives', () => {
    fixture.detectChanges();
    const board = fixture.nativeElement.querySelector('app-photo-board');
    const loader = fixture.nativeElement.querySelector('.loader');

    expect(board).withContext('should display board').not.toBeNull();
    expect(loader).withContext('should not display loader').toBeNull();
  });
});
