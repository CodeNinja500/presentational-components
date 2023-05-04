import { Component, Input } from '@angular/core';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  @Input() title: string = 'title';
  @Input() imageUrl: string = 'image';
}
