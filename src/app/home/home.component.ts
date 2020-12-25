import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  welcomeMessage = 'Hello workshop'
  themeColor = 'red';
  currLesson = null;
  items = [
    { title: 'Hello Angular' },
    { title: 'Component Fundamentals' },
    { title: 'Template Driven Forms' },
    { title: 'Angular Services' },
    { title: 'Server Communication' },
    { title: 'Component Driven Architecture' },
    { title: 'Angular Routing' },
    { title: 'Unit Testing Fundamentals' },
  ];

  constructor() { }

  ngOnInit(): void {
  }
  updateColor() {
    this.themeColor = 'salmon'
  }
  selectLesson(Lesson) {
    console.log('select lesson fired!', Lesson);
    this.currLesson = Lesson;
  }
}
