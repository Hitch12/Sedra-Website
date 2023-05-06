import { Component } from '@angular/core';
import * as $ from "jquery";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent  {
  ngOnInit() :void
  {
    $(window).scroll(function () {
      let windowScroll:number = $(window).scrollTop() as number;
      let offsetAbout:number = $('#about').offset()?.top as number;
      if(windowScroll > offsetAbout - 50){
        $('.navbar').css('backgroundColor', 'black')
      }
      else{
        $('.navbar').css('backgroundColor', '#00000045')
      }
    })
  }




}
