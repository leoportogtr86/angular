import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http'

import { PrimeiroComponent } from './components/primeiro/primeiro.component';
import { SegundoComponent } from './components/segundo/segundo.component';
import { HeaderComponent } from './components/template/header/header.component';
import { RevisaoTsComponent } from './components/revisao-ts/revisao-ts.component';
import { ResponsividadeComponent } from './components/responsividade/responsividade.component';
import { ContadorComponent } from './components/contador/contador.component';
import { ToDoComponent } from './components/to-do/to-do.component';
import { StringInterpolationComponent } from './components/data-binding/string-interpolation/string-interpolation.component'



@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponent,
    SegundoComponent,
    HeaderComponent,
    RevisaoTsComponent,
    ResponsividadeComponent,
    ContadorComponent,
    ToDoComponent,
    StringInterpolationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
