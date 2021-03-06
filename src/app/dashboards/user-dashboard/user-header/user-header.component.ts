import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../_shared/services/auth.service';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: []
})
export class UserHeaderComponent implements OnInit {
 @Input()
userdata;

  constructor(private router: Router,
  private _authService: AuthService) { }

  ngOnInit() {

  }
  getprofile() {
    this.router.navigateByUrl('/user-profile');
  }
  getJob() {

    this.router.navigateByUrl('/user-view-post');
  }

  logoutClicked() {
    this._authService.logout();
    this.router.navigateByUrl('login');
  }
  getAppliedJob() {

    this.router.navigateByUrl('/applied-job');
  }
}
