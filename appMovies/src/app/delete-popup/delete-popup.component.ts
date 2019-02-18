import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-delete-popup',
  templateUrl: './delete-popup.component.html',
  styleUrls: ['./delete-popup.component.css']
})
export class DeletePopupComponent implements OnInit {
  @Output() change = new EventEmitter;
  @Output() click = new EventEmitter;
  @Input() movieDelete;
  constructor() { }

  ngOnInit() {
  }

  closeDeletePopup(){
    this.change.emit({closeDeletePopup: true})
  }

  deleteThisMovie(){
    this.click.emit({deleteMovie: this.movieDelete})
  }
}
