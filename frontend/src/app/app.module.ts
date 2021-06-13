import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';


import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';


import { NavigationComponent } from './components/navigation/navigation.component';
import { ContainerbodyComponent } from './components/containerbody/containerbody.component';
import { DateAgoPipe } from './pipes/date-ago.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { JobdetailComponent } from './pages/jobdetail/jobdetail.component';
import { HomeComponent } from './pages/home/home.component';
import { ContainerjobComponent } from './components/containerjob/containerjob.component';


import { JobComponent } from './job/job.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { CompanyreviewComponent } from './companyreview/companyreview.component';
import { UserService } from './services/user.service';


import {JobService} from './services/job.service';
import {ReviewService} from './services/review.service';
import { CommonModule } from '@angular/common';
import { CompanyfilterPipe } from './pipes/companyfilter.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    BookmarkComponent,
    DashboardComponent,
    LoginComponent,
    HeaderComponent,
    RegisterComponent,
    NavigationComponent,
    ContainerbodyComponent,
    DateAgoPipe,
    FilterPipe,
    JobdetailComponent,
    HomeComponent,
    ContainerjobComponent,
   
    FooterComponent,
    CompanyreviewComponent,
    JobComponent,
    CompanyfilterPipe
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatDividerModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatExpansionModule,
    CommonModule,
    NgbModule
  ],
  
  providers: [
    UserService,
    JobService,
    ReviewService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
