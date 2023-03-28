import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserComponent} from './user/user.component';
import {FormsModule} from "@angular/forms";
import {BooksComponent} from './books/books.component';
import {BookComponent} from './book/book.component';
import {BooksService} from "./services/books.service";
import {HomeComponent} from './home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from "./material.module";
import {RegisterComponent} from './security/register/register.component';
import {LoginComponent} from './security/login/login.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import { BarComponent } from './navigation/bar/bar.component';
import { MenuListComponent } from './navigation/menu-list/menu-list.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    BooksComponent,
    BookComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    BarComponent,
    MenuListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
