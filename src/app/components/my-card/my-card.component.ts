import { Component, Input } from '@angular/core';
import { ViewModel } from 'src/app/models/view-model';

@Component({
  selector: 'card',
  templateUrl: './my-card.component.html',
  styleUrls: ['./my-card.component.scss'],
})
export class MyCardComponent {
  @Input() card: ViewModel = { title: '', description: '' };
}
