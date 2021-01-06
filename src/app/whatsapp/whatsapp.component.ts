import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'whatsapp',
  templateUrl: './whatsapp.component.html',
  styleUrls: ['./whatsapp.component.css']
})
export class WhatsappComponent implements OnInit {

  @Input() tel: string;
  @Input() text?: string;
  @Input() source?: string;
  @Input() data?: string;
  @Input() linktext: string;

  @ViewChild('whatsapp') el: ElementRef;

  constructor() { }

  ngOnInit() {

    this.el.nativeElement.setAttribute("href", "https://api.whatsapp.com/send?phone=" + this.tel + "&text=" + this.text + "&source=" + this.source + "&data=" + this.data);

  }

  ngAfterViewInit(){

    var link = document.createElement("link");

    link.setAttribute("rel", "stylesheet");
    link.setAttribute("href", "https://use.fontawesome.com/releases/v5.2.0/css/all.css");
    link.setAttribute("crossorigin", "anonymous");
    link.setAttribute("integrity", "sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ");

    document.getElementsByTagName("head").item(0).appendChild(link);

  }

}
