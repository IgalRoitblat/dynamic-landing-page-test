import { Component, OnInit } from '@angular/core';
import { LogosService } from '../services/logos.service';


@Component({
  selector: 'app-logo-section',
  templateUrl: './logo-section.component.html',
  styleUrls: ['./logo-section.component.css']
})
export class LogoSectionComponent implements OnInit {

  constructor(private LogosService: LogosService) { }

  ngOnInit() {
  	
  }

}
