import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { MakeupCardComponent } from './components/makeup-card/makeup-card.component';
import { DetailComponent } from './pages/detail/detail.component';
import { OptionalFilterComponent } from './components/optional-filter/optional-filter.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterComponent } from './pages/register/register.component';


import { NgxPaginationModule }  from  'ngx-pagination';
import { FourColumnLayoutComponent } from './pages/four-column-layout/four-column-layout.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { AutoFocusDirective } from './directive/auto-focus.directive';
import { CheckNetworkStatusComponent } from './components/check-network-status/check-network-status.component';
import { ProgressComponent } from './components/progress/progress.component';
import { Navbar1Component } from './components/navbar1/navbar1.component';
import { VerticalComponent } from './components/vertical/vertical.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MakeupCardComponent,
    DetailComponent,
    OptionalFilterComponent,
    FooterComponent,
    RegisterComponent,
    SpinnerComponent,
    FourColumnLayoutComponent,
 

       AutoFocusDirective,
       CheckNetworkStatusComponent,
       ProgressComponent,
       Navbar1Component,
       VerticalComponent,
      
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
