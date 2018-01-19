import { Component, OnInit } from '@angular/core';
import {GolfCourseService} from '../GolfCourse/golf-course-service';
import {GolfCourse} from '../GolfCourse/golf-course';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  pageTitle = 'Welcome';
  description = 'Please Choose a Golf Course';
  golfCourses: GolfCourse[];
  constructor(private golfCourseService: GolfCourseService) {

  }

  ngOnInit() {
    this.golfCourseService.getGolfCourses(4, 5, 5).subscribe(((GolfCourses: any) => {
      this.golfCourses = GolfCourses.courses;
      console.log(this.golfCourses);
    }));
  }}

