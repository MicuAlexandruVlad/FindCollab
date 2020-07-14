import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navPasswordReset(): void {
    this.router.navigate(['/reset-password']);
  }

  navSignUp(): void {
    this.router.navigate(['/sign-up']);
  }

}
