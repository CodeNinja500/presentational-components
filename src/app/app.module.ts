import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentModule } from './components/header/header.component.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AvatarComponentModule } from './components/avatar/avatar.component.module';
import { MyCardComponentModule } from './components/my-card/my-card.component.module';
import { RatingViewComponentModule } from './components/rating-view/rating-view.component.module';
import { ReadMorePanelComponentModule } from './components/read-more-panel/read-more-panel.component.module';
import { HeroComponentModule } from './components/hero/hero.component.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderComponentModule,
    BrowserAnimationsModule,
    AvatarComponentModule,
    MyCardComponentModule,
    RatingViewComponentModule,
    ReadMorePanelComponentModule,
    HeroComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
