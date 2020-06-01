import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MaterialModule} from './material/material.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaRoutingProjectComponent } from './ma-routing-project/ma-routing-project.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaStyleGuideComponent } from './ma-style-guide/ma-style-guide.component';


@NgModule({
  declarations: [
    AppComponent,
    MaRoutingProjectComponent,
    MaStyleGuideComponent,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
