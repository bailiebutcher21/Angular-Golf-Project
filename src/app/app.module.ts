
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule, MatSelectModule, MatMenuModule, MatTableModule, MatIconModule } from '@angular/material';
import { RouterModule, Routes} from '@angular/router';
import { GolfCourseService } from '../GolfCourse/golf-course-service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [
    GolfCourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
