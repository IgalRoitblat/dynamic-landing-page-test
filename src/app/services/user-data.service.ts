import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  public formStructure = [
  	{name: "email", type: "email", label: "Email", placeholder: "Please input your email"},
  ];

  constructor() { }
}
