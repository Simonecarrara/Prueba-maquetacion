import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private homeService:HomeService) { }

  ngOnInit() {
  }

  onImg(){
    this.homeService.loginSelected.emit(false);
  }

}
