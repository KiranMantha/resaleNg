import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GlobalService } from './app.global.service';
import { HeaderModule } from 'app/Components//Header';
import { TodoModule } from 'app/Components//Todo';
import { DialogModule } from  'app/Components//Dialog';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HeaderModule,
    TodoModule,
    DialogModule
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }


