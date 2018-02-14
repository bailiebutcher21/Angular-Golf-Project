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
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import {environment} from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    GolfCardComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatIconModule,
    MatGridListModule,
    HttpClientModule,
    ToastModule.forRoot(),
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: 'golf-card', component: GolfCardComponent},
      {path: '', pathMatch: 'full', redirectTo: 'welcome'},
      { path: '**', redirectTo: 'welcome' }
    ]),
  ],
  providers: [
    GolfCourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
