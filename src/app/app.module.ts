import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FooterComponent } from './home/footer.component';
import { HeaderComponent } from './home/header.component';
import { MainPageComponent } from './home/mainPage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainPageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: MainPageComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
