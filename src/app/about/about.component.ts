import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  events: any[] = [];

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
      this.events = [
        {
          status: 'Ordered',
          date: '15/10/2020 10:30',
          icon: 'pi pi-shopping-cart',
          color: '#9C27B0',
          image: '../../assets/golf.jpeg',
          class:'first shadow-2 rounded-2 mx-0 '
        },
        {
          status: 'Processing',
          date: '15/10/2020 14:00',
          icon: 'pi pi-cog',
          color: '#673AB7'
        },
        {
          status: 'Shipped',
          date: '15/10/2020 16:15',
          icon: 'pi pi-shopping-cart',
          color: '#FF9800'
        },
        {
          status: 'Delivered',
          date: '16/10/2020 10:00',
          icon: 'pi pi-check',
          color: '#607D8B'
        },
        {
          status: 'Delivered',
          date: '16/10/2020 10:00',
          icon: 'pi pi-check',
          color: '#607D8B'
        },
    ];
    console.log($('.first').offset()?.top as number)

  }
}
