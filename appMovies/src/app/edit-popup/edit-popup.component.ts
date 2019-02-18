import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-edit-popup',
  templateUrl: './edit-popup.component.html',
  styleUrls: ['./edit-popup.component.css']
})
export class EditPopupComponent implements OnInit {
  form: any;
  registerForm: FormGroup;

  @Input() allMovieData;
  @Output() change = new EventEmitter;
  @Output() click = new EventEmitter;
  
  constructor(private formBuilder: FormBuilder){}

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: [this.allMovieData.Title, Validators.required],
      year: [this.allMovieData.Year, 
        [Validators.required, Validators.minLength(4), , Validators.maxLength(4), Validators.pattern("^[0-9]*$")]],
      runtime: [this.allMovieData.Runtime, Validators.required],
      genre: [this.allMovieData.Genre, Validators.required],
      director: [this.allMovieData.Director, Validators.required]
    })
  }

  closePopup(){
    this.change.emit({close: true})
  }

  updateMovie(){
    if(this.form.status === 'VALID'){
      this.form.value.imdbID = this.allMovieData.imdbID;
      this.click.emit({movieDetails: this.form.value});
    }
  }
} 
