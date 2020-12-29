import { Component, OnInit } from '@angular/core';
import { LessonsService } from '../shared/services/lessons.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  welcomeMessage = 'Hello workshop'
  themeColor = 'red';
  currLesson = null;
  items = null;

  constructor(private lessonsService: LessonsService) { }

  ngOnInit(): void {
    this.items = this.lessonsService.all();
  }
  updateColor() {
    this.themeColor = 'salmon'
  }
  selectLesson(Lesson) {
    console.log('select lesson fired!', Lesson);
    this.currLesson = Lesson;
  }
}
