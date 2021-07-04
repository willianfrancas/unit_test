import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoFrameComponent } from './photo-frame.component';
import { PhotoFrameModule } from './photo-frame.module';

describe(`${PhotoFrameComponent.name}`, () => {

  let component: PhotoFrameComponent;
  let fixture: ComponentFixture<PhotoFrameComponent> = null;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoFrameModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should create component ${PhotoFrameComponent.name}`, () => {
    expect(component).toBeTruthy();
  });
});
