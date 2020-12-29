import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const BASE_URL = 'http://52.201.141.51:3000';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  model = 'courses/';
  private courses = [
    {
      id: 1,
      title: 'Angular 9 Fundamentals!!',
      description: 'Learn the fundamentals of Angular 9',
      percentComplete: 26,
      favorite: true
    },
    {
      id: 2,
      title: 'Angular 7 Fundamentals!!',
      description: 'Learn the fundamentals of Angular 6',
      percentComplete: 92,
      favorite: true
    }
  ];

  constructor(private http: HttpClient) { }
  all() {
    return this.http.get(this.getUrl());
  }
  find(courseID) {

  }
  create(course) {
    console.log("CREATE COURSE", course)
    return this.http.post(this.getUrl(), course);
  }
  update(course) {
    return this.http.put(`${this.getUrl()}${course.id}`, course);
  }
  delete(courseID) {
    console.log("DELETE COURSE", courseID)
    return this.http.delete(`${this.getUrl()}${courseID}`);
  }
  private getUrl() {
    return `${BASE_URL}${this.model}`;
  }
}
