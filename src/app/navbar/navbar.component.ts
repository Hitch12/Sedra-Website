import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as $ from "jquery";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent  {

  constructor(
    private _ActivatedRoute:ActivatedRoute
  ){}
  ngOnInit() :void
  {
    //console.log(window.location.pathname)
    // $('.navbar').css('backgroundColor', '#00000065')
    // $('.navbar').css('padding', '10px')
    $(window).scroll( ()=> {
      let windowScroll:number = $(window).scrollTop() as number;
      //let offsetAbout:number = $('#BEST-SELLER').offset()?.top as number;
        if(windowScroll > 50){
          $('.navbar').css('backgroundColor', 'black')
          $('.navbar').css('padding', '15px')
          $('#btn-up').fadeIn(500)
        }
        else{
          $('.navbar').css('backgroundColor', '#00000025')
          $('.navbar').css('padding', '10px')
          $('#btn-up').fadeOut(500)
        }

    })
    $('#btn-up').click(function(){
      $('body,html').animate({scrollTop:0},0)
    })
    document.querySelector('.nav-dropdown-category')?.addEventListener('click',()=>{
      if(!$('.dropdown-category').hasClass('dropdown-effect')){
        $('.dropdown-category').addClass(['dropdown-effect'])
        $('.dropdown-Branch').removeClass(['dropdown-effect'])
      }
      else
        $('.dropdown-category').removeClass(['dropdown-effect'])
    })

    document.querySelector('.nav-dropdown-Branch')?.addEventListener('click',()=>{
      if(!$('.dropdown-Branch').hasClass('dropdown-effect')){
        $('.dropdown-Branch').addClass(['dropdown-effect'])
        $('.dropdown-category').removeClass(['dropdown-effect'])
      }
      else
        $('.dropdown-Branch').removeClass(['dropdown-effect'])
    })





  }




}
