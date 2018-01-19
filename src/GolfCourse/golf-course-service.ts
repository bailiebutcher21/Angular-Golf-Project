import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {GolfCourse} from './golf-course';

@Injectable()
export class GolfCourseService {

  url: string = 'https://golf-courses-api.herokuapp.com/courses/';

  constructor(private httpClient: HttpClient) { }

  getGolfCourses(latitude: number, longitude: number, radius: number): Observable<GolfCourse[]> {
    return this.httpClient.post<GolfCourse[]>('${this.url}/courses',
      {
        latitude: 40.396419,
        longitude: -111.9328359,
        radius: 10
      });
  }
}