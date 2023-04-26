import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCardComponent } from './my-card.component';

@NgModule({
  declarations: [MyCardComponent],
  imports: [CommonModule],
  providers: [],
  exports: [MyCardComponent],
})
export class MyCardComponentModule {}
