import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './share/login/login.component';
import { FormViewComponent } from './pages/form-view/form-view.component';
import { DashbordComponent } from './pages/dashbord/dashbord.component';
import { ProcessComponent } from './pages/process/process.component';
import { PublishComponent } from './pages/publish/publish.component';
import { SignUpComponent } from './share/sign-up/sign-up.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // { path: 'mis', loadChildren: 'pages/mis/mis.module#MISModule', canActivate: [AuthGaurd] },
  // {
  //  path: '**',
  //  redirectTo: '/page404'
  // },
  // {
  //    path: 'page404',
  //    component: Page404Component
  // }

  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'formView',
    component: FormViewComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'dashbord',
    component: DashbordComponent,
  },
  {
    path: 'process',
    component: ProcessComponent,
  },

  {
    path: 'publish',
    component: PublishComponent,
  },
  {
    path: 'signUp',
    component: SignUpComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
