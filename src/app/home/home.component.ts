import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataService } from '../data.service';
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  loading:boolean = true;
  Categories:Array<any> = []
  Branches:Array<any> = []
  allProducts:Array<any> = []
  smellerProducts:Array<any> = []

  customOptions: OwlOptions = {
    loop: true,
    lazyLoad:true,
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
    autoplayTimeout: 10000,
    animateOut: 'fadeOut',
  };
  BestSellerOptions: OwlOptions = {
    loop: true,
    lazyLoad:true,

    mouseDrag: false,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    dotsData: true,
    navSpeed: 700,
    responsive: {
      0: {
        items: 2,
      },
      400: {
        items: 2,
      },
      740: {
        items: 4,
      },
      940: {
        items: 4,
      },
    },
    nav: false,
    autoplay: true,
    autoplayTimeout: 7000,
    animateOut: 'fadeOut',
    margin: 20,
  };
  categoriesOptions: OwlOptions = {
    loop: true,

    mouseDrag: false,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    dotsData: true,
    navSpeed: 700,
    responsive: {
      0: {
        items: 2,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000,
    animateOut: 'fadeOut',
    merge: false,
    center: true,
  };
  BranchesOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    dotsData: true,
    navSpeed: 700,
    responsive: {
      0: {
        items: 2,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 3,
      },
    },
    nav: false,
    autoplay: false,
    autoplayTimeout: 7000,
    center: true,
  };
  slideBranch: OwlOptions = {
    loop: true,
    lazyLoad:true,

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
  productOptions: OwlOptions = {
    loop: true,
    lazyLoad:true,

    mouseDrag: false,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    responsive: {
      0: {
        items: 2,
      },
      400: {
        items: 3,
      },
      740: {
        items: 3,
      },
      940: {
        items: 5,
      },
    },
    nav: false,
    autoplay: true,
    autoplayTimeout: 4500,
    margin:10,
    animateOut: 'fadeOut',
  }

  constructor(private _data:DataService) { }

  getCategories(){
    this._data.getCategories().subscribe({
      next:(result) => {
        this.Categories = result;
        this.loading = false;
        //console.log(this.Categories)
      }
    })
  }
  getBranches(){
    this._data.getBranches().subscribe({
      next:(result) => {
        this.Branches = result;
        this.loading = false;
        //console.log(this.Branches)
      }
    })
  }
  getAllProducts(){
    this._data.getAllProducts().subscribe({
      next:(result)=>{
        let res:Array<any> = result
        this.smellerProducts = res.filter(x=>x.bestSeller == true )
        // console.log(this.smellerProducts)

      this.allProducts = result.slice(0,10);

      }
    })
  }

  ngOnInit(): void {
    window.scrollTo({top:0 });

      this.getCategories();
      this.getBranches();
      this.getAllProducts();



  }






}
