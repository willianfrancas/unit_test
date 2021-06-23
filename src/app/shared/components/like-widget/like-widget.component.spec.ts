import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UniqueIdService } from '../../services/unique-id/unique-id.service';

import { LikeWidgetComponent } from './like-widget.component';

describe(LikeWidgetComponent.name, () => {
  let component: LikeWidgetComponent;
  let fixture: ComponentFixture<LikeWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        LikeWidgetComponent
      ],
      providers: [
        UniqueIdService
      ],
      imports: [
        FontAwesomeModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LikeWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should create ${LikeWidgetComponent.name}`, () => {
    expect(component).toBeTruthy();
    const instance = fixture.componentInstance;
    expect(instance).toBeTruthy();
  });

  it('should auto-generate ID during ngOnInit when (@Input id) is not assigned', () => {
    expect(component.id).toBeTruthy();
  });

  it('should not auto-generate ID during ngOnInit when (@Input id) is assigned', () => {
    component.id = 'someId'
    expect(component.id).toBe('someId');
  });

  it(`#${LikeWidgetComponent.prototype.like.name} should trigger (@Output liked) called`, done => {
    fixture.detectChanges();
    component.liked.subscribe(() => {
      expect(true).toBeTrue();
    });
    component.like();
    done();
  });

  it(`#${LikeWidgetComponent.prototype.like.name} should trigger (@Output liked) when called`, () => {
    spyOn(component.liked,'emit');
    component.like();
    expect(component.liked.emit).toHaveBeenCalled();
  });
});
