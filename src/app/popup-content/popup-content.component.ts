import { Component, OnInit } from '@angular/core';
import { UserActionsService } from '../services/user-actions.service';

@Component({
  selector: 'app-popup-content',
  templateUrl: './popup-content.component.html',
  styleUrls: ['./popup-content.component.css']
})
export class PopupContentComponent implements OnInit {
  public popupTitle: string = "Leave us your email :-)";

  constructor(public UserActionsService:UserActionsService) { }

  onPopupClose(e) {
  	this.UserActionsService.startNowClicked = false;
  }

  ngOnInit() {
  }

}
