import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';

import { AppComponent } from './components/app.component';
import { HomeComponent } from './components/home.component';
import { NewCardComponent } from './components/newcard.component';
import { CardComponent } from './components/card.component';
import { ColorComponent } from './components/color.component';
import { ColortextDirective } from './directive/colortext.directive';
import { ColorbgDirective } from './directive/colorbg.directive';
import { CardService } from './services/cards.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewCardComponent,
    CardComponent,
    ColorComponent,
    ColortextDirective,
    ColorbgDirective,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  bootstrap: [AppComponent],
  providers: [CardService]
})
export class AppModule { }
