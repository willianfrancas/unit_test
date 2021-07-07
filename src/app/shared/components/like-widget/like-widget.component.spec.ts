import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UniqueIdService } from '../../services/unique-id/unique-id.service';

import { LikeWidgetComponent } from './like-widget.component';
import { LikeWidgetModule } from './like-widget.module';

describe(LikeWidgetComponent.name, () => {
  let fixture: ComponentFixture<LikeWidgetComponent> = null;
  let component: LikeWidgetComponent = null;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        LikeWidgetModule,
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LikeWidgetComponent);
    component = fixture.componentInstance;

  });

  it(`should create ${LikeWidgetComponent.name}`, () => {
    expect(component).toBeTruthy();
  });

  it('should auto-generate ID during ngOnInit when (@Input id) is not assigned', () => {
    fixture.detectChanges();
    expect(component.id).toBeTruthy();
  });

  it('should not auto-generate ID during ngOnInit when (@Input id) is assigned', () => {
    const someId = 'someId';
    component.id = someId;
    fixture.detectChanges();
    expect(component.id).toBe(someId);
  });

  it(`#${LikeWidgetComponent.prototype.like.name} should trigger (@Output liked) when called`, () => {
    spyOn(component.liked, 'emit');
    fixture.detectChanges();
    component.like();
    expect(component.liked.emit).toHaveBeenCalled();
  });

  it(`#${LikeWidgetComponent.prototype.like.name} should trigger (@Output liked) when called`, () => {
    spyOn(component.liked, 'emit');
    fixture.detectChanges();
    component.like();
    expect(component.liked.emit).toHaveBeenCalled();
  });

  it(`(D) should display number of likes when clicked`, done => {

    fixture.detectChanges();

    component.liked.subscribe(() => {
      component.likes++;
      fixture.detectChanges();
      const counterEl: HTMLElement = fixture.nativeElement.querySelector('.like-counter');
      expect(counterEl.textContent.trim()).toBe('1');
      done();
    });

    const likeWidgetContainerEl: HTMLElement = fixture.nativeElement.querySelector('.like-widget-container');
    likeWidgetContainerEl.click();

  });

  it(`(D) should display number of likes when ENTER key is pressed`, done => {

    fixture.detectChanges();
    component.liked.subscribe(() => {
      component.likes++;
      fixture.detectChanges();

      const counterEl: HTMLElement = fixture.nativeElement.querySelector('.like-counter');
      expect(counterEl.textContent.trim()).toBe('1');
      done();
    });

    const likeWidgetContainerEl: HTMLElement = fixture.nativeElement.querySelector('.like-widget-container');
    const event = new KeyboardEvent('keyup', { key: 'Enter' });
    likeWidgetContainerEl.dispatchEvent(event);

  });

  it(`(D) should display number of likes when space key is pressed`, done => {

    fixture.detectChanges();
    component.liked.subscribe(() => {
      component.likes++;
      fixture.detectChanges();
      const counterEl: HTMLElement = fixture.nativeElement.querySelector('.like-counter');
      expect(counterEl.textContent.trim()).toBe('1');
      done();
    });
    const likeWidgetContainerEl: HTMLElement = fixture.nativeElement.querySelector('.like-widget-container');
    const event = new KeyboardEvent('keyup', { key: 'Space' });
    likeWidgetContainerEl.dispatchEvent(event);
  });
});
