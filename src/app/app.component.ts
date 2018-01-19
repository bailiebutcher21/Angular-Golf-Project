import { Component } from '@angular/core';
import {GolfCourseService} from '../GolfCourse/golf-course-service';
import {OnInit} from '@angular/core';
import {GolfCourse} from '../GolfCourse/golf-course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  golfCourses: GolfCourse[];
    constructor(private golfCourseService: GolfCourseService) {

    }

    ngOnInit() {
      this.golfCourseService.getGolfCourses(4, 5, 5).subscribe(((GolfCourses: GolfCourse[]) => {
        this.golfCourses = GolfCourses;
        console.log(this.golfCourses);
      }));
    }


  pageTitle = 'Welcome';
  description = 'Please Choose a Golf Course';

}
