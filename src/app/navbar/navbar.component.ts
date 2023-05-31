import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from "jquery";
import { DataService } from '../data.service';
import { TooltipOptions } from 'primeng/tooltip';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent  {

  // Attr
  Categories:Array<any> = []
  Branches:Array<any> = []


  constructor(
    private _ActivatedRoute:ActivatedRoute,
    private _data:DataService,
    private _Router:Router
  ){}


  // Methods
  getCategories(){

    this._data.getCategories().subscribe({
      next:(result) => {
        this.Categories = result;

      }
    })
  }
  getBranches(){
    this._data.getBranches().subscribe({
      next:(result) => {
        this.Branches = result;

      }
    })
  }



  ngOnInit() :void{

    this.getCategories()
    this.getBranches()
    $(window).scroll( ()=> {
      let windowScroll:number = $(window).scrollTop() as number;
      //let offsetAbout:number = $('#BEST-SELLER').offset()?.top as number;
        if(windowScroll > 50){
          $('.navbar').css('backgroundColor', 'black')
          $('.navbar').css('padding', '15px')
          // $('&__field').css('backgroundColor','#fff')
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



    $('.nav-dropdown-category').click(()=>{

      if(!$('.dropdown-category').hasClass('dropdown-effect')){
        $('.dropdown-category').addClass(['dropdown-effect'])
        $('.dropdown-Branch').removeClass(['dropdown-effect'])
      }
      else
      {
        $('.dropdown-category').removeClass(['dropdown-effect'])
      }

    })

    $('.nav-dropdown-Branch').click(()=>{
      if(!$('.dropdown-Branch').hasClass('dropdown-effect')){
        $('.dropdown-Branch').addClass(['dropdown-effect'])
        $('.dropdown-category').removeClass(['dropdown-effect'])
      }
      else
        $('.dropdown-Branch').removeClass(['dropdown-effect'])
    })

    $('.navNotDrop').click(()=>{
      $('.dropdown-Branch').removeClass(['dropdown-effect'])
      $('.dropdown-category').removeClass(['dropdown-effect'])

    })
  // Close onclick outside
  document.addEventListener('click', (e) => {
    const toggle:any = document.querySelector('.search__toggle')
    const input:any = document.querySelector('.search__input')
    const clickedElement:any = e.target
    if (clickedElement == toggle) {
      input.value = ''
      return;
    }
    if(input.value){
      this._Router.navigate(['/all-products', input.value])
    }
    const isSearchField = clickedElement.closest('.search__field')

    if (!isSearchField) {
      toggle.checked = false
      input.value = ''

    }
  })



  }




}
