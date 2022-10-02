import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormLoginComponent } from './component/form-login/form-login.component';
import { HomeOperarioComponent } from './component/home-operario/home-operario.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  {path:'', component: HomeOperarioComponent},
  {path:'home', component: HomeComponent},
  {path:'login', component: FormLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
