import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeneralService } from '../services/general.service';

@Component({
  selector: 'app-coupon-group',
  templateUrl: './coupon-group.component.html',
  styleUrls: ['./coupon-group.component.scss']
})
export class CouponGroupComponent implements OnInit {

  couponBoxId = 0;
  couponBox = {
    couponBox: null,
    category: null,
    business: null,
    coupons: []
  };

  constructor( private route: ActivatedRoute, private service: GeneralService) { 
    this.route.params.subscribe(params => {
      this.couponBoxId = params['id'];
    })
  }

  ngOnInit(): void {
    this.getCouponBox()
  }
  getCouponBox(){
    this.service.getCoupons(this.couponBoxId).subscribe((res: any)=>{
      this.couponBox = res.model
    })
  }

}
