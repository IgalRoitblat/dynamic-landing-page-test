import { Component, OnInit } from '@angular/core';
import { UserActionsService } from './services/user-actions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public title:string = "Don't Panic! Don't Panic!";
  public buttonClicked: boolean = false;

  constructor(public UserActionsService: UserActionsService) { }

  ngOnInit() {
  	
  }
}
