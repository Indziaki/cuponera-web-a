import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { CouponGroupComponent } from './public/coupon-group/coupon-group.component';
import { CouponsPageComponent } from './public/coupons-page/coupons-page.component';
import { AboutComponent } from './public/about/about.component';
import { ContactComponent } from './public/contact/contact.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'coupon/:id',
    component: CouponGroupComponent
  },
  {
    path: 'coupons',
    component: CouponsPageComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contactus',
    component: ContactComponent
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
