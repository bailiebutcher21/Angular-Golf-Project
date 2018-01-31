///<reference path="../../node_modules/@angular/material/core/typings/option/option.d.ts"/>

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatInputModule, MatSelectModule, MatMenuModule, MatTableModule, MatIconModule, MatTableDataSource } from '@angular/material';
import { RouterModule, Routes} from '@angular/router';
import { GolfCourseService } from '../GolfCourse/golf-course-service';
import {HttpClientModule} from '@angular/common/http';
import {GolfCardComponent} from '../golf-card/golf-card.component';
import { WelcomeComponent } from '../welcome/welcome.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {AngularFireModule} from 'angularfire2';



@NgModule({
  declarations: [
    AppComponent,
    GolfCardComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatIconModule,
    MatGridListModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: 'golf-card', component: GolfCardComponent},
      {path: '', pathMatch: 'full', redirectTo: 'welcome'},
      { path: '**', redirectTo: 'welcome' }
    ]),
      //AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    GolfCourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
