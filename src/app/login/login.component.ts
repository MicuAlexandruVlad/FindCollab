import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiClient } from 'src/core/ApiClient';
import { User } from 'src/shared/models/User';
import { AxiosResponse } from 'axios';
import * as HttpStatus from 'http-status-codes'
import { Skill } from 'src/shared/models/Skill';
import { PersonalProject } from 'src/shared/models/PersonalProject';
import { BasicDataService } from 'src/core/services/basic-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  client: ApiClient = null

  email = ''
  password = ''

  constructor(private router: Router, private dataService: BasicDataService) { }

  ngOnInit(): void {
    this.client = new ApiClient()
  }

  navPasswordReset(): void {
    this.router.navigate(['/reset-password']);
  }

  navSignUp(): void {
    this.router.navigate(['/sign-up']);
  }

  onLogIn(): void {
    if (this.email.localeCompare('') == 0 || this.password.localeCompare('') == 0) {
      alert('One or more fields are empty')
    } else {
      let user = new User()
      user.email = this.email
      user.password = this.password
      this.client.authUser(user).subscribe((res) => {
        let data = (res as AxiosResponse).data
        console.log(data)
        if (data.status == HttpStatus.OK) {
          let token = data.token
          // TODO: set user data and store token in local storage
          this.bindUserData(user, data)
          this.storeToken(token)
          this.router.navigate(['/main'])
        }
      })
    }
  }

  private bindUserData(user: User, data: any): void {
    user.firstName = data.user.firstName
    user.lastName = data.user.lastName
    user.id = data.user._id
    user.skills = this.getSkills(data.user.skills)
    user.personalProjects = new Array<PersonalProject>()
    this.dataService.user = user
  }

  private storeToken(token: string): void {
    localStorage.setItem('token', token)
  }

  private getSkills(data: any): Array<Skill> {
    let skills = new Array<Skill>()

    for (let index = 0; index < data.length; index++) {
      const skillData = data[index];
      let skill = new Skill()
      skill.name = skillData.name
      skill.grade =  skillData.grade
      skills.push(skill)
    }

    return skills
  }
}
