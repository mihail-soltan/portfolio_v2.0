import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  quote: string =
    '“Any fool can write code that a computer can understand. Good programmers write code that humans can understand.” – Martin Fowler';

  skillTab: string = 'frontend-skills'
  constructor() {}

  ngOnInit(): void {
  }
  tabChecked = new EventEmitter();
  changeSkillTab(t: any){
    this.skillTab = t.target.id;
    console.log(this.skillTab)
  }

  checkTab (t: any){
    console.log(t.target)
  }
}
