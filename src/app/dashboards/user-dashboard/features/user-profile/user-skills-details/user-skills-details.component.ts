import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserBaseService } from '../../../../../_shared/services/user-base.service';
import { uuid } from '../../../../../_shared/models/uuid';

declare var $: any;

@Component({
  selector: 'app-user-skills-details',
  templateUrl: './user-skills-details.component.html',
})
export class UserSkillsDetailsComponent implements OnInit {
  skillsArray: string[];
  applicantSkillForm: FormGroup;
  temp: string;
  @Input()
  userdata;

  @Output()
  discardClick = new EventEmitter<boolean>();

  @Output()
  saveClick = new EventEmitter();

  discardClicked() {
    this.discardClick.emit(JSON.parse(this.temp));
  }


  constructor(private _userService: UserBaseService) {
    this.skillsArray = ['Angular', 'CSS', 'Graphic Design', 'Ember', 'HTML',
    'Information Architecture', 'Javascript', 'Mechanical Engineering',
    'Meteor', 'NodeJS', 'UI Design', 'Python', 'Rails', 'React', 'Ruby'];

    this.buildFormGroup();
   }

   buildFormGroup(): void {
    const fg = {
      'skills': new FormControl(null, Validators.required),
    };
    this.applicantSkillForm = new FormGroup(fg);
  }

  ngOnInit() {
    $('.dropdown').dropdown({
      label: {
        duration: 0,
      },
      debug: true,
      performance: true,
    });
    this.temp = JSON.stringify(this.userdata);
    // this.userdata.skillValue = ['CSS', 'Graphic Design', 'Ember', 'HTML'];
  }



  async updateUserSkill() {
    // console.log(console.log('new', this.applicantSkillForm.value));
    this.userdata.skillValue = this.applicantSkillForm.value.skills;
    console.log('skills are:', JSON.stringify(this.userdata.skillValue) );
    await this._userService.updateUserDetailsById(this.userdata, uuid());
    this.saveClick.emit(this.userdata);
    // this.skillsArray.pop();
  }
}
