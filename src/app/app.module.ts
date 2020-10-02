import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './user/login/login.component';
import { ContactComponent } from './contact/contact.component';
import { StoreComponent } from './store/store.component';





import { MaterialModule } from './material.module';

export const routes =  [
  { path: 'about', component: AboutComponent, label: 'About' },
  { path: 'store', component: StoreComponent, label: 'Store' },
  { path: 'contact', component: ContactComponent, label: 'Contact' },
  { path: 'login', component: LoginComponent, label: 'Login' }
 ];


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    AboutComponent,
    StoreComponent,
    LoginComponent,
    ContactComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,  
    RouterModule.forRoot(routes), 
    BrowserAnimationsModule, 
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    MaterialModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
