import { NgModule, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/App/app.component'
import { GlobalService } from './components/App/app.global.service';
import { HeaderModule } from './components/Header';
import { TodoModule } from './components/Todo';
import { DialogModule } from  './components/Dialog';



@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        HttpModule,
        ReactiveFormsModule,
        HeaderModule,
        TodoModule,
        DialogModule
    ],
    providers: [GlobalService]
})
export class MainModule { }