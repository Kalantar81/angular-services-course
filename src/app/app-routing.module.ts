import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InjectableComponent } from './components/injectable/injectable.component';
import { IntroComponent } from './components/intro/intro.component';
import { LocalServiceComponent } from './components/local-service/local-service.component';


const routes: Routes = [
  {path: '', redirectTo: 'intro', pathMatch: 'full'}, // '' will render to home component
  {path: 'intro', component: IntroComponent},
  {path: 'injectable', component: InjectableComponent},
  {path: 'localService', component: LocalServiceComponent},

  {path: '**', component: IntroComponent}  // '**' something goes wrong, will render to home component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
