import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActionDirectiveModule } from './action-directive.module';
import { ActionDirective } from './action.directive';

describe('ActionDirective', () => {

  let fixture: ComponentFixture<ActionDirectiveTestComponent>;
  let component: ActionDirectiveTestComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ActionDirectiveTestComponent
      ],
      imports: [
        ActionDirectiveModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ActionDirectiveTestComponent);
    component = fixture.componentInstance;
  });

  it('should create an instance', () => {
    const directive = new ActionDirective();
    expect(directive).toBeTruthy();
  });

  it('(D) (@Output appAction) should emit event with payload when ENTER key is pressed', () => {

    const divEl = fixture.debugElement.query(By.directive(ActionDirective)).nativeElement;
    const zdivEl: HTMLElement = fixture.nativeElement.querySelector('.dummy-component');
    const event = new KeyboardEvent('keyup', { key: 'Enter' });
    divEl.dispatchEvent(event);
    expect(component.hasEvent()).toBeTrue();
  });

  it('(D) (@Output appAction) should emit event with payload when Clicked', () => {
    const divEl: HTMLElement = fixture.nativeElement.querySelector('.dummy-component');
    const event = new Event('click');
    divEl.dispatchEvent(event);
    expect(component.hasEvent()).toBeTrue();
  });

  // it(`(D) (@Output appAction) should emit event with payload when clicked or ENTER key pressed`, () => {
  //   const divEl: HTMLElement = fixture.nativeElement.querySelector('.dummy-component');
  //   const clickEvent = new Event('click');
  //   const keyBoardEvent = new KeyboardEvent('keyup', { key: 'Enter' });
  //   divEl.dispatchEvent(clickEvent);
  //   expect(component.hasEvent()).withContext('Click event').toBeTrue();
  //   component.resetForNewExpectation();
  //   divEl.dispatchEvent(keyBoardEvent);
  //   expect(component.hasEvent()).withContext('Keyboard event "keyup"').toBeTrue();
  // });
});

@Component({
  template: `<div class="dummy-component" (appAction)="actionHandler($event)"></div>`,
})
class ActionDirectiveTestComponent {

  private event: Event = null;

  public actionHandler(event: Event): void {
    this.event = event;
  }

  public hasEvent(): boolean {
    return !!this.event;
  }

  public resetForNewExpectation(): void {
    this.event = null;
  }
}
