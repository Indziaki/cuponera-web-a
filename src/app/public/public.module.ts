import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { CouponGroupComponent } from './coupon-group/coupon-group.component';
import { BusinessComponent } from './business/business.component';
import { CouponsPageComponent } from './coupons-page/coupons-page.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [HomeComponent, CouponGroupComponent, BusinessComponent, CouponsPageComponent, AboutComponent, ContactComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PublicModule { }
