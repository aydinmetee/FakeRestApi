import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TableModule } from 'primeng/table';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HttpClientModule } from '@angular/common/http';
import { HeroesService } from './services/heroes.service';
import { DialogModule } from 'primeng/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [AppComponent, HeroesComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    TableModule,
    HttpClientModule,
    DialogModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
