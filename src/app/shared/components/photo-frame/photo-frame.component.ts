import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-photo-frame',
  templateUrl: './photo-frame.component.html',
  styleUrls: ['./photo-frame.component.scss']
})
export class PhotoFrameComponent implements OnInit {

  @Input() src = '';
  @Input() description = '';
  @Input() likes = 0;

  @Output() public liked: EventEmitter<void> = new EventEmitter();

  private debounceSubject: Subject<void> = new Subject();
  private unsubscribe: Subject<void> = new Subject();

  constructor() { }

  ngOnInit(): void {
    this.debounceSubject.asObservable()
      .pipe(debounceTime(300))
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(() => this.liked.emit());
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  like(): void {
    this.debounceSubject.next();
  }

}
