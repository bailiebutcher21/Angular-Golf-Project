import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {GolfCourse} from './golf-course';
import {catchError} from "rxjs/operators";

@Injectable()
export class GolfCourseService {
  url = 'https://golf-courses-api.herokuapp.com';
  selected: number;
  constructor(private httpClient: HttpClient) { }

  getGolfCourses(): Observable<GolfCourse[]> {
    return this.httpClient.post<GolfCourse[]>(`${this.url}/courses`,
      {
        latitude: 40.396419,
        longitude: -111.9328359,
        radius: 25,
      });
  }
}
   function getSelectedCourse(courseId: number): Observable<any[]> {
   return this.httpClient.get<Course[]>(this.url + '/'+ courseId)
 }
