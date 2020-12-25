import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  currCourse = null
  courses = [
    {
      id: 1,
      title: 'Angular 9 Fundamentals',
      description: 'Learn the fundamentals of Angular 9',
      percentComplete: 26,
      favorite: true
    },
    {
      id: 2,
      title: 'Angular 7 Fundamentals',
      description: 'Learn the fundamentals of Angular 6',
      percentComplete: 32,
      favorite: true
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.resetSelectedCourse();
  }
  resetSelectedCourse() {
    const emptyCourse = {
      id: null,
      title: '',
      description: '',
      percentComplete: 0,
      favorite: false
    }
    this.currCourse = emptyCourse;
  }

  selectCourse(Course) {
    console.log('select lesson fired!', Course);
    this.currCourse = Course;
  }
  deleteCourse(id) {
    console.log("deleting");
  }
  cancel() {
    this.resetSelectedCourse();
  }
  saveCourse() {
    console.log('save course fired!');
  }
}
