import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  form: any;
  sendForm: FormGroup;

@Output() change = new EventEmitter; 
@Output() click = new EventEmitter; 
 
constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      movieName: ['', [Validators.required, Validators.minLength(2)]]
    })
  }

  closeAddMoviePopup(){
    this.change.emit({closeAddMoviePopup: true})
  }
  
  addMovie(){
    if(this.form.status === 'VALID'){
      this.click.emit({newMovieValue: this.form.value});
    }
  }

}
