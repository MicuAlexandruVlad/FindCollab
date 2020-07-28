import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
import { BasicDataService } from '../../core/services/basic-data.service'

@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.scss']
})
export class EmailVerificationComponent implements OnInit {

  sec1Val = ''
  sec2Val = ''
  sec3Val = ''
  sec4Val = ''
  sec5Val = ''
  userEmail = ''

  constructor(private basicDataService: BasicDataService) {
    this.userEmail = basicDataService.email
  }

  ngOnInit(): void {
    this.handleInputEvents()
  }

  onSubmit(): void {
    if (this.makeCode().localeCompare(this.basicDataService.emailVerificationCode) == 0) {

    } else {
      alert('Codes are not matching')
    }
  }

  private makeCode(): string {
    return (this.sec1Val + this.sec2Val + this.sec3Val + this.sec4Val + this.sec5Val).toUpperCase() 
  }

  private handleInputEvents(): void {
    $("#security-1").on("keyup", function(e) {
      if (e.keyCode != 8) {
        $("#security-2").focus()
      }
    })

    $("#security-2").on("keyup", function(e) {
      if (e.keyCode != 8) {
        $("#security-3").focus()
      }
    })

    $("#security-3").on("keyup", function(e) {
      if (e.keyCode != 8) {
        $("#security-4").focus()
      }
    })

    $("#security-4").on("keyup", function(e) {
      if (e.keyCode != 8) {
        $("#security-5").focus()
      }
    })

    $("#security-2").keyup((e) => {
      if (e.keyCode == 8) {
        $("#security-1").focus()
      }
    })

    $("#security-3").keyup((e) => {
      if (e.keyCode == 8) {
        $("#security-2").focus()
      }
    })

    $("#security-4").keyup((e) => {
      if (e.keyCode == 8) {
        $("#security-3").focus()
      }
    })

    $("#security-5").keyup((e) => {
      if (e.keyCode == 8) {
        $("#security-4").focus()
      }
    })
  }

}
