import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

class User {
  firstName: string
  lastName: string
  email: string
  password: string
}

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

  constructor(private router: Router) { }

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

      console.log(this.user)
    }
  }
}
