import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddSkillDialogComponent } from '../dialogs/add-skill-dialog/add-skill-dialog.component';
import { AddPersonalProjectDialogComponent } from '../dialogs/add-personal-project-dialog/add-personal-project-dialog.component';
import { Skill } from 'src/shared/models/Skill';
import { PersonalProject } from 'src/shared/models/PersonalProject';
import { User } from 'src/shared/models/User';
import { BasicDataService } from 'src/core/services/basic-data.service';
import { data } from 'jquery';
import { ApiClient } from 'src/core/ApiClient';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: User
  client: ApiClient

  firstName = 'Alexandru-Vlad'
  lastName = 'Micu'
  email = 'vlad15235@gmail.com'
  birthDate = '10/6/1996'
  country = ''
  city = ''
  state = ''
  facebookUrl = ''
  twitterUrl = ''
  linknedInUrl = ''
  skills = new Array<Skill>()
  personalProjects = new Array<PersonalProject>()

  //TODO: flags - change these later accordingly
  displayNoSkills = false
  displayNoPersonalProjects = false

  constructor(private dialog: MatDialog,
    private dataService: BasicDataService) { }

  ngOnInit(): void {
    this.client = new ApiClient()

    this.user = this.dataService.user
    // this.user.lastName = this.dataService.user.lastName
    // this.user.firstName = this.dataService.user.firstName
    // this.user.email = this.dataService.user.email
    // this.user.id = this.dataService.user.id
    // this.user.skills = this.dataService.user.skills
    // this.user.personalProjects = this.dataService.user.personalProjects

    if (this.skills.length > 0) {
      this.displayNoSkills = false
    }
    if (this.personalProjects.length > 0) {
      this.displayNoPersonalProjects = false
    }
  }

  openSkillDialog(): void {
    let skillDialogRef = this.dialog.open(AddSkillDialogComponent, {
      height: '40%',
      width: '50%',
      data: this.skills
    })

    skillDialogRef.afterClosed().subscribe(result => {
      (result as Array<Skill>).forEach(skill => {
        this.user.skills.push(skill)
        console.log('Skills in array -> ' + this.user.skills.length)
        console.log('Skills in service user array -> ' + this.dataService.user.skills.length)
      })
    })
  }

  openPersonalProjectDialog(): void {
    let persProjDialogRef = this.dialog.open(AddPersonalProjectDialogComponent, {
      height: '90%',
      width: '100%'
    })
  }

  editSkills(): void {

  }

  editPersonalProjects(): void {

  }

  saveChanges(): void {
    this.client.updateSkills(this.user.skills, this.user.id).subscribe((res) => {
      console.log(res)
    })
  }

  private areChanges(): boolean {
    if (this.dataService.user.lastName.localeCompare(this.user.lastName) !== 0)
      return true
    else if (this.dataService.user.firstName.localeCompare(this.user.firstName) !== 0)
      return true
    else if (this.dataService.user.skills.length !== this.user.skills.length) 
      return true
    return false
  }
}
