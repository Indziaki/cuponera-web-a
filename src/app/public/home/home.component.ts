import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from '../services/general.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public slides = [
    { 
      src: "https://images.unsplash.com/photo-1490323948794-cc6dde6e8f5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1626&q=80",
      link: "https://google.com"
    },
    { 
      src: "https://images.unsplash.com/photo-1479832793815-b9be4c77023e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
      link: "https://google.com"
    },
    { 
      src: "https://images.unsplash.com/photo-1567579518027-7a113279f8ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2389&q=80",
      link: "https://google.com"
    }
  ];
  public businessList = [];

  constructor(
    private router: Router,
    private service: GeneralService
    ) { }

  ngOnInit(): void {
    this.getBusiness()
  }

  getBusiness(){
    this.service.getBusiness().subscribe((res: any)=>{
      this.businessList = res.model;
    })
  }

}
