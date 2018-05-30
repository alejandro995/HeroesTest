import  {  NgModule  }  from  '@angular/core';
import { FormsModule } from "@angular/forms";
import  {  CommonModule  }  from  '@angular/common';

import  { HelloComponent }  from  './app.component';
import  {  BrowserModule  }  from  '@angular/platform-browser';

@NgModule({
    bootstrap:  [HelloComponent],
     imports:  [BrowserModule, FormsModule],
     declarations:  [HelloComponent]
})
export  class  AppModule  {
}