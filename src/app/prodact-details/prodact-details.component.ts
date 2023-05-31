import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MenuItem } from 'primeng/api';
import { DataService } from '../data.service';

@Component({
  selector: 'app-prodact-details',
  templateUrl: './prodact-details.component.html',
  styleUrls: ['./prodact-details.component.scss'],
})
export class ProdactDetailsComponent {

  slider: OwlOptions = {
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
    autoplayTimeout: 3000,
    animateOut: 'fadeOut',
  }
  BestSellerOptions: OwlOptions = {
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
        items: 4,
      },
      940: {
        items: 4,
      },
    },
    autoplay: true,
    autoplayTimeout: 7000,
    animateOut: 'fadeOut',
    margin: 10,
  };

  items: MenuItem[] = [];
  home: MenuItem = {};
  id:any;
  allProducts: Array<any> = []
  allCategories: Array<any> = []
  smellerProducts: Array<any> = []
  currentProduct:any
  loading:boolean = true;
  departmentName:string = ''
  constructor(private _ActivatedRoute:ActivatedRoute, private _DataService:DataService)  {}





  getProductDetails(id:any){
    this._DataService.getAllProducts().subscribe({
      next:(result)=>{
        this.allProducts = result
        let product =this.allProducts.find(x=>x.id==id);
        this.currentProduct = product
        this.departmentName = product.departName
        // console.log(this.currentProduct)
        this.items = [
          { label: product.departName,  routerLink: ['/category', product.idDepart, product.departName] },
          { label: product.name,  routerLink: '/', disabled:true},
        ];
        this.loading = false
        this.getSmellerProducts(this.departmentName,product.name)
      }
    })
  }

  getSmellerProducts(departmentName:any,productName:any){
    this._DataService.getProductsCategories().subscribe({
      next:(result)=>{
        this.allCategories = result;
        // console.log(this.allCategories)
        var specialDepart = this.allCategories.find(x=>x.name == departmentName);
        this.allCategories = specialDepart.prodects
        this.allCategories = this.allCategories.filter(x=>x.name != productName )

        console.log(this.allCategories)
      }
    })
  }




  ngOnInit() {
    $('body,html').animate({ scrollTop: 0 }, 0);




    this._ActivatedRoute.paramMap.subscribe(params =>{
      this.id = params.get('id');
      this.getProductDetails(this.id)
      $('body,html').animate({scrollTop:0},0)

    })




    this.home = { icon: 'pi pi-home', routerLink: '/home' };
  }
}
