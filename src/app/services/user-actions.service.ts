import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserActionsService {
  public startNowClicked: boolean = false;
  public isPopupMoveEnabled: boolean = false;
   
  constructor() { }
}
