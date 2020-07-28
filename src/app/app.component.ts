import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FindCollab';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.navigate(['/login']);
  }
}
