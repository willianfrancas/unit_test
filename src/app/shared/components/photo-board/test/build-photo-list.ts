import { PhotoModel } from "../photo.interface";

export function buildPhotoList(): PhotoModel[] {
  const photos: PhotoModel[] = [];
  for (let i = 0; i < 16; i++) {
    photos.push({
      id: i + 1,
      url: 'someUrl',
      description: 'Some_Description',
    });
  }
  return photos;
}
