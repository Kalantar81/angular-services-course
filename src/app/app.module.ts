import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './components/container/body/body.component';
import { ContainerComponent } from './components/container/container.component';
import { HeaderComponent } from './components/container/header/header.component';
import { IntroComponent } from './components/intro/intro.component';
import { CounterService } from './services/counter.service';
import { InjectableComponent } from './components/injectable/injectable.component';
import { LocalServiceComponent } from './components/local-service/local-service.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    HeaderComponent,
    BodyComponent,
    IntroComponent,
    InjectableComponent,
    LocalServiceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    CounterService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
