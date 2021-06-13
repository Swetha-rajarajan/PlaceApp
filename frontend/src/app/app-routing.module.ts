import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { CompanyreviewComponent } from './companyreview/companyreview.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { JobComponent } from './job/job.component';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { JobdetailComponent } from './pages/jobdetail/jobdetail.component';


import { RegisterComponent } from './register/register.component';

const routes: Routes = [

  {
    path:'login-component',
    component:LoginComponent
  },
  {
    path:'header-component',
    component : HeaderComponent
  },

  {
    path:'register-component',
    component: RegisterComponent
  },
  {
    path: 'dashboard-component',
    component: DashboardComponent
  },
  { path: '', component: DashboardComponent },
  { path: 'job/:id', component: JobdetailComponent},

  {
    path: 'job-component',
    component : JobComponent
  },

  {
    path : 'home-component',
    component: HomeComponent
  },

  {
    path: 'bookmark-component',
    component : BookmarkComponent
  },
  {
    path:'review-component',
    component: CompanyreviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
