import {
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class HeaderComponent implements OnInit {
  constructor(private _cdr: ChangeDetectorRef) {}
  ngOnInit(): void {
    this._cdr.detach();
  }
}
