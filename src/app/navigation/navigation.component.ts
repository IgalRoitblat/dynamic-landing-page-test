import { Component, OnInit } from '@angular/core';
import { UserActionsService } from '../services/user-actions.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  public navigationTitle: string = "Coold stuff here! You've got to see it!";

  constructor(public UserActionsService:UserActionsService) { }

  onStartNowClick(e) {
  	console.log("clicked");
  	this.UserActionsService.startNowClicked = !this.UserActionsService.startNowClicked;
  }

  ngOnInit() {
  }

}
