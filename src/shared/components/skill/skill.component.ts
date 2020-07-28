import { Component, OnInit, Input } from '@angular/core';
import { Skill } from 'src/shared/models/Skill';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input('skill') skill: Skill
  
  @Input('index') index: number

}
