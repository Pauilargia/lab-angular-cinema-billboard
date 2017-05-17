import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../service/cinema.service'

@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.css']
})
export class MyHomeComponent implements OnInit {

  constructor(public cinema: CinemaService) { }

  ngOnInit() {
  }

}
