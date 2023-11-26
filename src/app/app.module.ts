import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { LazyLoadImagesDirective, MakeupCardComponent } from './components/makeup-card/makeup-card.component';
import { DetailComponent } from './pages/detail/detail.component';
import { OptionalFilterComponent } from './components/optional-filter/optional-filter.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterComponent } from './pages/register/register.component';


import { NgxPaginationModule }  from  'ngx-pagination';
import { FourColumnLayoutComponent } from './pages/four-column-layout/four-column-layout.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

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
 
    LazyLoadImagesDirective,
      
  
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
