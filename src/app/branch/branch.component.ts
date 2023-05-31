import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.scss']
})
export class BranchComponent {
  loading:boolean = true;
  Branch:Array<any> = [];
  id:any;
  name:any;
  phone:string = ''
  email:string = ''
  address:string = ''
  images:Array<any> =[]
  customOptions: OwlOptions = {
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
    autoplayTimeout: 10000,
    animateOut: 'fadeOut',
  };

  constructor(
    private _DataService:DataService,
    private _ActivatedRoute:ActivatedRoute
    ) {}

  getBranchDetails(id:any){
    this._DataService.getBranches().subscribe({
      next:(result)=>{
        this.Branch = result;
        var ayHaga = this.Branch.find(x=>x.id==id);

        this.name = ayHaga.name
        this.phone = ayHaga.phone
        this.email = ayHaga.email
        this.address = ayHaga.address
        this.images = ayHaga.branchImages
        this.Branch = ayHaga
        console.log(this.address)
        this.loading = false
      }
    })
  }



  ngOnInit(): void {
    window.scrollTo({top:0 });

    this._ActivatedRoute.paramMap.subscribe(params =>{
      this.id = params.get('id');
      this.loading = true;

      this.getBranchDetails(this.id)
    })
    // this.name = this._ActivatedRoute.snapshot.params['name'];



  }
}
