import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { InstructionsComponent } from './components/instructions/instructions.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardsComponent } from './components/cards/cards.component';
import { FunctionService } from './function.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    InstructionsComponent,
    FooterComponent,
    CardsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [FunctionService],
  bootstrap: [AppComponent],
})
export class AppModule {}
