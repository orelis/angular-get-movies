import { Component, OnInit } from '@angular/core';
import { MoviesServicesService } from '../movies-services.service'

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})


export class MoviesListComponent implements OnInit {
  movies: any;
  togglePopup: boolean = false;
  toggleDeletPopup: boolean = false;
  toggleAddMovie: boolean = false;
  allDetailesMovies: any;
  checkMovieId;
  getAllMovieData: any;
  movieDelete: any;
  errorForm: any;
  isAlert: boolean = false;

  constructor(private service: MoviesServicesService) { }

  ngOnInit() {
    this.service.getMovies()
    .subscribe(response => {
      this.movies = response['Search'];
    })
  }

  openPopup(){
    this.togglePopup = true;
  }

  readMore(id){
    this.service.getMoreDetailsAboutTheMovie(id)
      .subscribe(response => {
        this.allDetailesMovies = response;
        this.checkMovieId = response['imdbID'];
      })
  }

  closePopup(event){
    if(event.close){
      this.togglePopup = false;
    }
    if(event.closeDeletePopup){
      this.toggleDeletPopup = false;
    }

    if(event.closeAddMoviePopup){
      this.toggleAddMovie = false;
    }
  }

  openEditMoviePopup(id){
    this.service.getMoreDetailsAboutTheMovie(id)
    .subscribe(response => {
      this.getAllMovieData = response;
      this.togglePopup = true;
    })
  }

  deleteThisMovie(movie){
    this.toggleDeletPopup = true;
    this.movieDelete = movie;
  }

  removeThisMovie(event: any){
    if(event.deleteMovie){
      let index = this.movies.indexOf(event.deleteMovie);
      this.movies.splice(index, 1);
      this.toggleDeletPopup = false;

      //To Do
      // this.service.deleteThisMovie(event.deleteMovie.imdbID)
      // .subscribe(response =>{
      //   console.log('res', response)
      // })
    }
  }

  updateMovie(event){
    if(event.movieDetails){
    for(let i in this.movies){
        if(this.movies[i].imdbID === event.movieDetails.imdbID){
          this.movies[i].Title = event.movieDetails.title;
          this.movies[i].Year = event.movieDetails.year;
          this.togglePopup = false;
          //To Do
          // this.service.editThisMovie(event.movieDetails, event.movieDetails.imdbID)
          // .subscribe(response => {
          //     console.log(response)
          // })
        }
      }
    }
  }

  openAddMoviePopup(){
    this.toggleAddMovie = true;
  }

  addNewMovies(event){
    if(event.newMovieValue){
      this.service.addThisNewMovies(event.newMovieValue.movieName)
      .subscribe(response => {
        console.log(response['Response'])
        if(response['Response'] === 'False'){
          console.log(response['Error'])
          this.errorForm = response['Error'];
          this.isAlert = true;
          setTimeout(()=>{
            this.isAlert = false;
          },3000)
        }else{
          for(let i in response['Search']){
            this.movies.push(response['Search'][i])
          }
          this.toggleAddMovie = false;
        }
  
      })
    }
  }
}
