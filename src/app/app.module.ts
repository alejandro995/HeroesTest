import  {  NgModule  }  from  '@angular/core';
import { FormsModule } from "@angular/forms";
import  {  CommonModule  }  from  '@angular/common';

import  { HelloComponent }  from  './app.component';
import  {  BrowserModule  }  from  '@angular/platform-browser';
import { OrdinalPipe } from './ordinal.pipe';

@NgModule({
    bootstrap:  [HelloComponent],
     imports:  [BrowserModule, FormsModule],
     declarations:  [HelloComponent, OrdinalPipe]
})
export  class  AppModule  {
}