import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable, take, tap } from 'rxjs';

@Component({
  selector: 'read-more-panel',
  templateUrl: './read-more-panel.component.html',
  styleUrls: ['./read-more-panel.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReadMorePanelComponent {
  @Input() mainText: string = '';
  @Input() readMoreText: string = '';
  @Input() openLabel: string = 'Read More';
  @Input() closedLabel: string = 'Read Less';

  private _isPanelOpenSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public readonly $isPanelOpen: Observable<boolean> = this._isPanelOpenSubject.asObservable();

  private _buttonLabelSubject: BehaviorSubject<string> = new BehaviorSubject<string>(this.openLabel);
  public readonly $buttonLabel: Observable<string> = this._buttonLabelSubject.asObservable();

  public alternateViewPanel(): void {
    this.$isPanelOpen
      .pipe(
        take(1),
        tap((isOpen) => {
          this._isPanelOpenSubject.next(!isOpen);
          if (isOpen) {
            this._buttonLabelSubject.next(this.openLabel);
          } else {
            this._buttonLabelSubject.next(this.closedLabel);
          }
        })
      )
      .subscribe();
  }
}
