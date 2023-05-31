import { Component } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent {

  ngOnInit() {
    window.scrollTo({top:0 });
    $('#btn-up').click(function(){
      $('body,html').animate({scrollTop:0},0)
    })


  }
}
