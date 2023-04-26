import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'rating-view',
  templateUrl: './rating-view.component.html',
  styleUrls: ['./rating-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RatingViewComponent implements OnInit {
  @Input() max: number = 0;
  @Input() value: number = 0;
  @Output() clicked: EventEmitter<number> = new EventEmitter<number>();

  private _starsSubject: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);
  public $stars: Observable<number[]> = this._starsSubject.asObservable();

  public onStarSelected(index: number): void {
    const newStarsArray = Array(this.max)
      .fill(0, 0, this.max)
      .fill(1, 0, index + 1);
    this._starsSubject.next(newStarsArray);
    this.clicked.emit(index + 1);
  }

  ngOnInit(): void {
    const emptyArray = new Array<number>(this.max).fill(0);
    const numberOfFullStars = Math.floor(this.value);
    const halfStar = this.value - numberOfFullStars >= 0.5 ? true : false;

    this._starsSubject.next(
      emptyArray.map((star, index) => {
        if (index < numberOfFullStars) return 1;
        else if (index == numberOfFullStars && halfStar) return 0.5;
        else return 0;
      })
    );
  }
}
