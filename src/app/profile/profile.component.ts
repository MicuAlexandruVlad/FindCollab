import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  firstName = 'Alexandru-Vlad'
  lastName = 'Micu'
  email = 'vlad15235@gmail.com'
  birthDate = '10/6/1996'
  facebookUrl = ''
  twitterUrl = ''
  LinknedInUrl = ''

  saveBasicInfo(): void {

  }

  saveAboutMe(): void {

  }

  saveExternalLinks(): void {

  }

}
