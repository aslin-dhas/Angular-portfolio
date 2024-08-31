import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent  {

  skills = [
    { name: 'HTML', image: 'assets/html.jpg' },
    { name: 'CSS', image: 'assets/css.png' },
    { name: 'JavaScript', image: 'assets/javascript.png' },
    { name: 'Angular', image: 'assets/angular.jpg' },
    { name: 'Python', image: 'assets/python.jpeg' },
    { name: 'Mysql', image: 'assets/mysql.png' },
  ];

}
