import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent {
  loading:boolean = true;
  value:any;
  allProducts: Array<any> = []
  Categories:Array<any> = []
  Branches:Array<any> = []
  thereProducts:boolean = false
  thereCategories:boolean = false
  thereBranches:boolean = false


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


  constructor(private _ActivatedRoute:ActivatedRoute,private _DataService:DataService) {}


  getAllProducts(value:any){
    this._DataService.getAllProducts().subscribe({
      next:(result)=>{
        this.allProducts = result
        this.allProducts = this.allProducts.filter(x=>x.name.toLowerCase().includes( value.toLowerCase() ) )
        console.log(this.allProducts)

        if(this.allProducts.length) this.thereProducts = true;
        else this.thereProducts = false;

        this.loading = false;

      }
    })
  }
  getCategories(value:any){
    this._DataService.getCategories().subscribe({
      next:(result) => {
        this.Categories = result;
        this.Categories = this.Categories.filter(x=>x.name.toLowerCase().includes( value.toLowerCase() ) )
        console.log(this.Categories)

        if(this.Categories.length) this.thereCategories = true;
        else this.thereCategories = false;

        this.loading = false;
      }
    })
  }
  getBranches(value:any){
    this._DataService.getBranches().subscribe({
      next:(result) => {
        this.Branches = result;
        this.Branches = this.Branches.filter(x=>x.name.toLowerCase().includes( value.toLowerCase() ) )
        console.log(this.Branches)

        if(this.Branches.length) this.thereBranches = true;
        else this.thereBranches = false;

        this.loading = false;
      }
    })
  }





  ngOnInit() {
    window.scrollTo({top:0 });
    this._ActivatedRoute.paramMap.subscribe(params =>{
      this.value = params.get('value');
      this.loading = true;
      window.scrollTo({top:0 });

      this.getAllProducts(this.value)
      this.getCategories(this.value)
      this.getBranches(this.value)
    })






  }




}
