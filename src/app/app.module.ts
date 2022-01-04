import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { homeComponent } from './homeComponent/homeComponent';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddComponent } from './addComponent/add/add.component';
import { AppRoutingModule } from './app.routes.module';
import { ListComponent } from './listComponent/listComponent'
@NgModule({
  declarations: [
    AppComponent,
    homeComponent,
    AddComponent,
    ListComponent,
  ],
  imports: [
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
