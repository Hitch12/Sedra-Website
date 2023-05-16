import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  items: MenuItem[] = [];

  home: MenuItem = {};
  constructor() {}

  ngOnInit() {
    window.scrollTo({top:0 })

    this.items = [
      { label: 'Bast Seller',  routerLink: '/'  },
      { label: 'Kunafa Marshmallow',  routerLink: '/', disabled:true},
    ];

    this.home = { icon: 'pi pi-home', routerLink: '/home' };
  }
}
