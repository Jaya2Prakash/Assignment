import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import {  MyFilterValue, MyFilterValue1 } from './myfilter';
import { TaskComponent } from './task/task.component';
import { Task1Component } from './task1/task1.component';
import { WebService } from './web.service';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    MyFilterValue,
    MyFilterValue1,
    TaskComponent,
    Task1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
