import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {
  userLogin:boolean;

  constructor(private homeService:HomeService) { }

  ngOnInit() {
    this.userLogin=false;
    this.homeService.loginSelected.subscribe((isLoginselected)=>{
      this.userLogin=isLoginselected;
    })
  }

}
