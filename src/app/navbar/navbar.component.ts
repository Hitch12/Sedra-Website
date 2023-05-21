import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as $ from "jquery";
import { DataService } from '../data.service';
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
    private _data:DataService
  ){}


  // Methods
  getCategories(){

    this._data.getCategories().subscribe({
      next:(result) => {
        this.Categories = result;

      }
    })
  }
  // getAntherCategory(id:string, name:string){

  // }
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
    console.log(this.Categories)
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




  }




}
