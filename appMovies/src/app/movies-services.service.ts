import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesServicesService {

  url = 'http://www.omdbapi.com/?s=superman&apikey=77251b24';
  constructor(private http: HttpClient) { }

  getMovies(){
    return this.http.get(this.url)
  }

  getMoreDetailsAboutTheMovie(id){
    return this.http.get('http://www.omdbapi.com/?i=' + id + '&apikey=77251b24');
  }
  
  editThisMovie(arg: any, id){
    //To do
    return this.http.patch(this.url + '/' + id, JSON.stringify(arg));
  }

  deleteThisMovie(id){
    //To do
    return this.http.delete(this.url + '/' + id);
  }

  addThisNewMovies(value){
    return this.http.get('http://www.omdbapi.com/?s='+ value +'&apikey=77251b24');
  }
}
