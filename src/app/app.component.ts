import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cuponera-web';
  isSticky: boolean = false;

  constructor(
    private router: Router
    ) { }
    
  onScroll(event) {
    this.isSticky = event.srcElement.scrollTop > 10
  }
  couponDetail(){
    this.router.navigate(['/coupon']);
  }
}
