import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesService } from './courses.service';
import { FooterComponent } from './componets/footer/footer.component';
import { HeaderComponent } from './componets/header/header.component';
import { PricingComponent } from './componets/pricing/pricing.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    PricingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
