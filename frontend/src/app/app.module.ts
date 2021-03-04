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
import { StringInterpolationComponent } from './components/data-binding/string-interpolation/string-interpolation.component';
import { PropertyBindingComponent } from './components/data-binding/property-binding/property-binding/property-binding.component';
import { EventBindingComponent } from './components/data-binding/event-binding/event-binding/event-binding.component'
import {TarefasService} from './components/to-do/tarefas.service';
import { TwoWayComponent } from './components/data-binding/two-way/two-way.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component'


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
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayComponent,
    NgIfComponent,
    NgSwitchComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule

  ],
  providers: [TarefasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
