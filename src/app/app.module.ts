import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { SinginComponent } from './singin/singin.component';
import { FormServiceService} from './form-service.service';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
   { path: 'signin', component: SinginComponent },
  // { path: '**', component: PageNotFoundComponent }
  // { path: 'table_data', component: TableDataComponent },
  ];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    SinginComponent
  ],
  imports: [
  RouterModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule
  ],
  providers: [FormServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
