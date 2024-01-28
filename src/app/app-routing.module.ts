import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { DetailComponent } from './pages/detail/detail.component';
import { FourColumnLayoutComponent } from './pages/four-column-layout/four-column-layout.component';
import { VerticalComponent } from './components/vertical/vertical.component';
import { LoginComponent } from './pages/login/login.component';
import { RouteResolver } from './resolvers/route.resolver';


const routes: Routes = [
  
  { path: '', component: FourColumnLayoutComponent}, 
  { path: 'vertical', component: VerticalComponent },
 //{ path: 'four', component: FourColumnLayoutComponent}, 
  { path: 'home', component: HomeComponent , children:[]},
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: ':id', component: DetailComponent , 
   resolve: {RouteResolver}
}
 

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
