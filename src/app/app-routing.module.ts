import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchCollabComponent } from './search-collab/search-collab.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateProjectComponent } from './create-project/create-project.component';


const routes: Routes = [{
  path: 'login',
  component: LoginComponent
}, {
  path: 'welcome',
  component: WelcomeComponent
}, {
  path: 'reset-password',
  component: PasswordResetComponent
}, {
  path: 'sign-up',
  component: SignUpComponent
}, {
  path: 'main',
  component: NavbarComponent,
  children: [{
    path: 'create-project',
    component: CreateProjectComponent
  }, {
    path: 'search-collab',
    component: SearchCollabComponent
  }, {
    path: 'profile',
    component: ProfileComponent
  }],
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
