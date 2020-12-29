import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../shared/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  currCourse = null
  courses = null;

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.resetSelectedCourse();
    this.loadCourses();
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
  cancel() {
    this.refreshCourses()
  }
  saveCourse(course) {
    console.log('save course fired!');
    if (course.id)
      this.coursesService.update(course).subscribe(result => this.refreshCourses())
    else
      this.coursesService.create(course).subscribe(result => this.refreshCourses())
    this.resetSelectedCourse();
  }
  deleteCourse(courseID) {
    this.coursesService.delete(courseID).subscribe(result => this.refreshCourses());
  }
  loadCourses() {
    this.courses = this.coursesService.all().subscribe(courses => this.courses = courses);
  }
  refreshCourses() {
    this.resetSelectedCourse();
    this.loadCourses()
  }
}
