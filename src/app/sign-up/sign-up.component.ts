import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiClient } from '../../core/ApiClient'
import Axios, { AxiosResponse } from 'axios'
import { from } from 'rxjs';
import { User } from 'src/shared/models/User';
import * as HttpStatus from 'http-status-codes'
import { BasicDataService } from 'src/core/services/basic-data.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit {

  user = new User()
  firstName = ''
  lastName = ''
  email = ''
  password = ''

  constructor(private router: Router, private basicDataService: BasicDataService) { }

  ngOnInit(): void {
  }

  onLogin(): void {
    this.router.navigate(['/login'])
  }

  onSignUp(): void {
    if (this.firstName.localeCompare('') == 0 ||
        this.lastName.localeCompare('') == 0 ||
        this.email.localeCompare('') == 0 || 
        this.password.localeCompare('') == 0) {
      alert('One or more fields are empty')
    } else {
      this.user.firstName = this.firstName
      this.user.lastName = this.lastName
      this.user.email = this.email
      this.user.password = this.password

      let apiClient = new ApiClient()
      let verificationCode = this.generateVerificationCode()
      console.log(verificationCode)
      this.basicDataService.emailVerificationCode = verificationCode
      this.basicDataService.email = this.email
      let obs = apiClient.registerUser(this.user, verificationCode)
      obs.subscribe((response) => {
        let data = (response as AxiosResponse).data
        if (data.status == HttpStatus.OK) {
          alert('Account created')
          this.router.navigate(['/email-verification'])
        } else if (data.status == HttpStatus.NOT_IMPLEMENTED) {
          alert('Email address already used')
        }
        obs.unsubscribe()
      })
    }
  }

  private generateVerificationCode(): string {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    
    for ( var i = 0; i < 5; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return result;
  }
}
