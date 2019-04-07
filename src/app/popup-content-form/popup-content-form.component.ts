import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-popup-content-form',
  templateUrl: './popup-content-form.component.html',
  styleUrls: ['./popup-content-form.component.css']
})
export class PopupContentFormComponent implements OnInit {
  public formSubmitted: boolean = false;
  constructor(public UserDataService:UserDataService) { }

  onSubmit(e, form) {
  	console.log(form)
  	this.formSubmitted = true;
  }

  onFormConfirmationClose($event) {
    this.formSubmitted = false;
  }

  ngOnInit() {
  }

}
