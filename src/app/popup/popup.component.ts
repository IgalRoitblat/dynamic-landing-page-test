import { Component, OnInit ,ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  @ViewChild('popupContent') popupContent: ElementRef;
  constructor() { }

  onDrag(e) {
    console.log("drag")
    this.popupContent.nativeElement.style.display = "none";
  }

  onDragEnd(e) {
    this.popupContent.nativeElement.style.top = `0`;
    this.popupContent.nativeElement.style.left = `0`;
    console.log(e);
    this.popupContent.nativeElement.style.position = "absolute";
    this.popupContent.nativeElement.style.top = `${e.pageY}px`;
    this.popupContent.nativeElement.style.left = `${e.pageX}px`;
    this.popupContent.nativeElement.style.display = "block";
  }

  ngOnInit() {
  }

}
