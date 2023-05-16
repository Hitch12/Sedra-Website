import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-prodact-details',
  templateUrl: './prodact-details.component.html',
  styleUrls: ['./prodact-details.component.scss'],
})
export class ProdactDetailsComponent {
  // images: any[] = [
  //   {
  //     itemImageSrc:
  //       '../../assets/279123683_1664034763953327_1892697871383421844_n.jpg',
  //     thumbnailImageSrc:
  //       '../../assets/279123683_1664034763953327_1892697871383421844_n.jpg',
  //     alt: 'Description for Image 1',
  //     title: 'Title 1',
  //   },
  //   {
  //     itemImageSrc:
  //       'https://primefaces.org/cdn/primeng/images/galleria/galleria2.jpg',
  //     thumbnailImageSrc:
  //       'https://primefaces.org/cdn/primeng/images/galleria/galleria2s.jpg',
  //     alt: 'Description for Image 2',
  //     title: 'Title 2',
  //   },
  //   {
  //     itemImageSrc:
  //       'https://primefaces.org/cdn/primeng/images/galleria/galleria3.jpg',
  //     thumbnailImageSrc:
  //       'https://primefaces.org/cdn/primeng/images/galleria/galleria3s.jpg',
  //     alt: 'Description for Image 3',
  //     title: 'Title 3',
  //   },
  //   {
  //     itemImageSrc:
  //       'https://primefaces.org/cdn/primeng/images/galleria/galleria4.jpg',
  //     thumbnailImageSrc:
  //       'https://primefaces.org/cdn/primeng/images/galleria/galleria4s.jpg',
  //     alt: 'Description for Image 4',
  //     title: 'Title 4',
  //   },
  // ];

  // responsiveOptions: any[] = [
  //   {
  //     breakpoint: '1024px',
  //     numVisible: 5,
  //   },
  //   {
  //     breakpoint: '768px',
  //     numVisible: 3,
  //   },
  //   {
  //     breakpoint: '560px',
  //     numVisible: 1,
  //   },
  // ];
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
  items: MenuItem[] = [];

  home: MenuItem = {};
  constructor() {}
  BestSellerOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    dotsData: true,
    navSpeed: 700,
    navText:['','<i class="fa-solid fa-arrow-right" style="color: #ffffff;"></i>'],
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
        nav: true,
      },
    },
    autoplay: true,
    autoplayTimeout: 7000,
    animateOut: 'fadeOut',
    margin: 20,
  };
  ngOnInit() {
    $('body,html').animate({ scrollTop: 0 }, 0);
    $('.navbar').css('backgroundColor', 'black')
    $('.navbar').css('padding', '15px')
    $('#btn-up').fadeIn(500)
    this.items = [
      { label: 'Bast Seller',  routerLink: '/'  },
      { label: 'Kunafa Marshmallow',  routerLink: '/', disabled:true},
    ];

    this.home = { icon: 'pi pi-home', routerLink: '/home' };
  }
}
