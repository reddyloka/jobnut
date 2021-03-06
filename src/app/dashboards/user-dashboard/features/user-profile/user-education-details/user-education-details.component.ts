import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
@Component({
  selector: 'app-user-education-details',
  templateUrl: './user-education-details.component.html',
  styleUrls: []
})
export class UserEducationDetailsComponent implements OnInit {
  // addEducation: boolean;
  editEducation: boolean;
@Input()
userdata;


  yearArray: string[];
  highestDegreeArray1: string[];
  @Output()
  discardClick = new EventEmitter<boolean>();

  discardClicked() {
    this.discardClick.emit(true);
  }

  constructor() {
    console.log('EEEEEEEEEEEEE', this.userdata);
    this.highestDegreeArray1 = ['B-Tech', 'B.Sc'];
    this.yearArray = ['2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', '2008', '2007', '2006', '2005', '2004', '2003', '2002', '2001', '2000', '1999', '1998'];
  }

  ngOnInit() {

  }

}
