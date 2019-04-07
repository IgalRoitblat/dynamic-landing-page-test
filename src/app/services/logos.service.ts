import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogosService {
  public logoImages = ['assets/facebook-logo-small.png', 'assets/Google_2015_logo_small.png', 'assets/nike_small.png', 'assets/Tesla-logo-small.png'];

  constructor() { }
}
