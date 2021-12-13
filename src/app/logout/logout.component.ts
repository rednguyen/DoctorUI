import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private router: ActivatedRoute,
    private route: Router
  ) { }

  ngOnInit(): void {
  }
  goHome()
  {localStorage.removeItem('localUsername');
  localStorage.removeItem('localPassword');
  localStorage.removeItem('localRole')

    this.route.navigate(['']);

  }

}
