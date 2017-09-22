import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
  isDisplayMyHobby = false;
  myHobby = ['弹琴', '唱歌' , '看电影' , '写诗'];
  emotion = 'happy';
  constructor() { }
  ngOnInit() {
  }
}
