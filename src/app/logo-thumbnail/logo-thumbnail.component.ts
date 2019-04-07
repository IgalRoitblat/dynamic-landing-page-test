import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-logo-thumbnail',
  templateUrl: './logo-thumbnail.component.html',
  styleUrls: ['./logo-thumbnail.component.css']
})
export class LogoThumbnailComponent implements OnInit {
	@Input() image;
  constructor() { }

  ngOnInit() {
  	console.log(this.image);
  }

}
