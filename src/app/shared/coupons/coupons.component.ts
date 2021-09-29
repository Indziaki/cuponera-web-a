import { Component, OnInit, HostListener } from '@angular/core';
import { GeneralService } from '../../public/services/general.service';
import { Router } from '@angular/router'; //import router

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.scss']
})
export class CouponsComponent implements OnInit {
  limit = [1,2,3,4,5,6,7];
  minimum = 3;
  categories = []
  groups = []
  groupsFiltered = []

  constructor(private service: GeneralService, public router:Router) { }

  ngOnInit(): void {
    this.getGroups();
    this.getCategories();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if(window.innerWidth < 1024 && window.innerWidth >= 640) this.minimum = 2
    else if(window.innerWidth < 640) this.minimum = 1
    else this.minimum = 3
  }
  getOdd(index){
    var isOdd = Math.floor(index/this.minimum)
    return isOdd%2 == 0 ? 'odd' : 'even';
  }
  getCategories(){
    this.service.getCategories().subscribe((res: any)=>{
      this.categories = res.model;
    })
  }
  getGroups(){
    this.service.getCouponGroups().subscribe((res: any)=>{
      this.groups = res.model;
      this.groupsFiltered = res.model
      this.onResize(null);
    })
  }
  filterCat(category){
    if(category){
      this.groupsFiltered = this.groups.filter(x=>x.categoryId==category.id)
    }
    else this.groupsFiltered = this.groups;
  }

}
