import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../service/cinema.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css']
})
export class MyMovieComponent implements OnInit {
  movieId: number;
  movie: Object;

  constructor(public cinema: CinemaService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params
        .subscribe((params) => this.movieId = Number(params['id']));
     this.movie = this.cinema.getMovie(this.movieId);
  }

  goHome(){
    this.router.navigate(['home']);
  }

}
