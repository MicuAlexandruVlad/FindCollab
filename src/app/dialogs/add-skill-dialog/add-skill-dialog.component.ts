import { Component, OnInit } from '@angular/core';
import { Skill } from '../../../shared/models/Skill'
import * as $ from 'jquery'
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-skill-dialog',
  templateUrl: './add-skill-dialog.component.html',
  styleUrls: ['./add-skill-dialog.component.scss']
})
export class AddSkillDialogComponent implements OnInit {

  skills: Array<Skill>

  constructor(public dialogRef: MatDialogRef<AddSkillDialogComponent>, 
              public toastr: ToastrService) { }

  ngOnInit() {
    this.skills = new Array()
    let skill = new Skill()
    skill.name = ''
    skill.grade = 0
    this.skills.push(skill)
  }

  onNewSkill(): void {
    let lastSkill = this.skills[this.skills.length - 1]
    if (this.checkSkill(lastSkill)) {
      let skill = new Skill()
      skill.name = ''
      skill.grade = 0
      this.skills.push(skill)
    }
  }

  onDone(): void {
    let lastSkill = this.skills[this.skills.length - 1]
    if (this.checkSkill(lastSkill)) {
      this.dialogRef.close(this.skills)
    }
  }

  private checkSkill(skill: Skill): boolean {
    if (skill.grade === 0 && skill.name.localeCompare('') === 0) {
      this.toastr.error('No data added', 'Data missing', { timeOut: 3000 })
      return false
    } else if (skill.grade === 0) {
      this.toastr.error('Skill not graded', 'Grade missing', { timeOut: 3000 })
      return false
    } else if (skill.name.localeCompare('') === 0) {
      this.toastr.error('Skill not named', 'Name missing', { timeOut: 3000 })
      return false
    }
    return true
  }

  onGrade1(index: number): void {
    this.skills[index].grade = 1
  }

  onGrade2(index: number): void {
    this.skills[index].grade = 2
  }

  onGrade3(index: number): void {
    this.skills[index].grade = 3
  }

  onGrade4(index: number): void {
    this.skills[index].grade = 4
  }

  onGrade5(index: number): void {
    this.skills[index].grade = 5
  }
}
