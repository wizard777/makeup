import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { DetailComponent } from './pages/detail/detail.component';
import { FourColumnLayoutComponent } from './pages/four-column-layout/four-column-layout.component';

const routes: Routes = [

  { path: '', component: FourColumnLayoutComponent}, 
 //{ path: 'four', component: FourColumnLayoutComponent}, 
  { path: 'home', component: HomeComponent , children:[]},
  { path: 'register', component: RegisterComponent },
  { path: ':id', component: DetailComponent },

  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
