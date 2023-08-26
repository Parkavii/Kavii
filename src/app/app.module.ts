import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http' ;
import { DataService } from './data.service';

import {MatInputModule} from '@angular/material/input';
import{MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { HighlightDirective } from './highlight.directive';
import { UnlessDirective } from './unless.directive';
import { FontSizeDirective } from './font-size.directive';
import { RegisterationComponent } from './registeration/registeration.component';
import { HomeComponent } from './home/home.component';
import { ObservableComponent } from './observable/observable.component' ;

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HighlightDirective,
    UnlessDirective,
    FontSizeDirective,
    RegisterationComponent,
    HomeComponent,
    ObservableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatTableModule,
    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
