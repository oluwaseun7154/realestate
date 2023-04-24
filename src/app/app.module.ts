import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './reusable/header/header.component';
import { FooterComponent } from './reusable/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { PropertiesComponent } from './pages/properties/properties.component';
import { AgentsComponent } from './pages/agents/agents.component';
import { PagesComponent } from './pages/pages/pages.component';
import { BlogComponent } from './pages/blog/blog.component';
import { SubmitpropertyComponent } from './pages/submitproperty/submitproperty.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PropertiesComponent,
    AgentsComponent,
    PagesComponent,
    BlogComponent,
    SubmitpropertyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
