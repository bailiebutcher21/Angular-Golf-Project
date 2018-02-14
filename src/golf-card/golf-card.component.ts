import { Component, OnInit } from '@angular/core';

declare let $: any;
@Component({
  selector: 'app-golf-card',
  templateUrl: './golf-card.component.html',
  styleUrls: ['./golf-card.component.css']
})

export class GolfCardComponent implements OnInit {
  GolfCardComponent: any;
  private mytee: number;

  constructor(

) {
}
ngOnInit() {
  let numholes;
  const numplayers = 4;
  let selectedtee;
  const currentCourse = this.GolfCardComponent.getCurrentCourse();
  const c = currentCourse.course.holes;
  const getPar = currentCourse.course.holes[c].tee_boxes[this.mytee].par;
  const gethcp = currentCourse.course.holes[c].tee_boxes[this.mytee].hcp;
  const getyardage = currentCourse.course.holes[c].tee_boxes[this.mytee].yards;

  function buildCard(mytee) {
    selectedtee = mytee;
    numholes = currentCourse.course.holes.length;
    console.log(numholes); } }
