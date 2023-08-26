import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { HomeComponent } from './home/home.component';
import { ObservableComponent } from './observable/observable.component';
const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"dash",component:DashboardComponent},
  {path:"reg",component:RegisterationComponent},
  {path:"home",component:HomeComponent},
  {path:"obser",component:ObservableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
