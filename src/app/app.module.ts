import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatInputModule } from '@angular/material/input';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { CreateProjectComponent } from './create-project/create-project.component';
import { SearchCollabComponent } from './search-collab/search-collab.component';
import { AddSkillDialogComponent } from './dialogs/add-skill-dialog/add-skill-dialog.component'
import { ProfileComponent } from './profile/profile.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { AddPersonalProjectDialogComponent } from './dialogs/add-personal-project-dialog/add-personal-project-dialog.component';
import { EmailVerificationComponent } from './email-verification/email-verification.component'
import { SkillComponent } from '../shared/components/skill/skill.component'



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    NavbarComponent,
    PasswordResetComponent,
    SignUpComponent,
    CreateProjectComponent,
    SearchCollabComponent,
    ProfileComponent,
    AddSkillDialogComponent,
    AddPersonalProjectDialogComponent,
    EmailVerificationComponent,
    SkillComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    ToastrModule.forRoot(),
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent],
  schemas: [  ]
})
export class AppModule { }
