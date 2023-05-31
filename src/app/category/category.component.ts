import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { DataService } from '../data.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  loading:boolean = true;
  items: MenuItem [] = [];
  home: MenuItem = {};
  id:any;
  name:string = '';
  products: Array<any> = []
  allProducts: Array<any> = []
  background:string = ''

  constructor(private _ActivatedRoute:ActivatedRoute,private _DataService:DataService) {}

  getProductsCategories(id:any){
    this._DataService.getProductsCategories().subscribe({
      next:(result)=>{
        this.allProducts = result;
        var specialDepart=this.allProducts.find(x=>x.id==id);
        this.name=specialDepart.name
        this.products=specialDepart.prodects;
        this.background = specialDepart.imageBackground
        this.loading = false
      }
    })
  }


  ngOnInit() {
    window.scrollTo({top:0 });
    this._ActivatedRoute.paramMap.subscribe(params =>{
      this.id = params.get('id');
      this.loading = true;

      this.getProductsCategories(this.id)
    })

    this.name = this._ActivatedRoute.snapshot.params['name'];
    this.getProductsCategories(this.id)





    this.items = [
      { label: this.name,  routerLink: '/' ,disabled:true },
    ];

    this.home = { icon: 'pi pi-home', routerLink: '/home' };



  }


}
