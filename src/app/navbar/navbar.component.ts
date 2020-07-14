import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.navProfile()
  }

  navPostCollab(): void {
    this.router.navigate(['./create-project'], { relativeTo: this.activatedRoute })
  }

  navSearchCollab(): void {
    this.router.navigate(['./search-collab'], { relativeTo: this.activatedRoute })
  }

  navProfile(): void {
    this.router.navigate(['./profile'], { relativeTo: this.activatedRoute })
  }

}
