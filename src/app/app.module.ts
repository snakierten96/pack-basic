import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgRedux, DevToolsExtension} from 'ng2-redux';

import { App } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule
  ],
  declarations: [ App ],
  bootstrap: [ App ]
})
export class AppModule {

  
}