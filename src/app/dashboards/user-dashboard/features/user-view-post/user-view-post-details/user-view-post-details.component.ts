import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router } from '@angular/router';
import { HrbaseService } from '../../../../../_shared/services/hrbase.service';
import { UserBaseService } from '../../../../../_shared/services/user-base.service';
import { ApplicantBase } from '../../../../../_shared/models/applicantbase';
import { HrPostDetail } from '../../../../../_shared/models/hrpostdetails';
import { uuid } from '../../../../../_shared/models/uuid';

declare const $: any;

@Component({
  selector: 'app-user-view-post-details',
  templateUrl: './user-view-post-details.component.html',
  styleUrls: ['./user-view-post-details.component.css']
})
export class UserViewPostDetailsComponent implements OnInit {
  userdata: ApplicantBase;
  id: string;
  uploadNewCv: boolean;
  hrpost: HrPostDetail;

  constructor(private route: ActivatedRoute,
    private hrbaseservice: HrbaseService,
    private userbaseservice: UserBaseService,
    private router: Router) {
    this.uploadNewCv = false;
    this.id = uuid();
  }


  ngOnInit() {

    this.route.paramMap.subscribe((params: ParamMap) => {
      const hrpost_id = params.get('user-post.id');
      this.hrbaseservice.getHrPostById(hrpost_id).
        then((hrpost) => {
          this.hrpost = hrpost;
        });
    });

    this.userbaseservice.getUserDetailsById(this.id).
      then((userdata) => {
        this.userdata = userdata;
      });
  }
  uploadNew() {
    this.uploadNewCv = true;

  }

  uploadOld() {
    this.uploadNewCv = false;
  }
  applyToPost() {
    console.log('post_id', this.hrpost._id);
    console.log('id', this.id);
    this.userbaseservice.updateUserApplyPost(this.hrpost._id, this.id).
      then(() => {
        console.log('successfully applied and notified');
        this.router.navigateByUrl('user-view-post');
      });
  }

}