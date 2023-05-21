import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  loading:boolean = true;

  slideBranch: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      },
    },
    nav: false,
    autoplay: true,
    autoplayTimeout: 4500,
    animateOut: 'fadeOut',
  }
  constructor() { }



  ngOnInit() {

    $(window).scroll(()=>{
      let windowScroll:number = $(window).scrollTop() as number;
      let offset_Item3:number = $('#item3').offset()?.top as number;
      let offset_Item2:number = $('#item2').offset()?.top as number;
      let offset_Item1:number = $('#item1').offset()?.top as number;

      if(windowScroll >  offset_Item1 - offset_Item1){
        $('#item1').addClass(['item1-fadeIn'])
      }else $('#item1').removeClass(['item1-fadeIn'])
      if(windowScroll > offset_Item2 - offset_Item2){
        $('#item2').addClass(['item2-fadeIn'])
      }else $('#item2').removeClass(['item2-fadeIn'])
      if(windowScroll > offset_Item3 - offset_Item3){
        $('#item3').addClass(['item3-fadeIn'])
      }else $('#item3').removeClass(['item3-fadeIn'])


    })


  }





}
