import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DashboardService]
})
export class DashboardComponent implements OnInit {
  opened= true;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.dashboardService.isOpened.subscribe((isOpen)=>{
      this.opened=isOpen;
    })
  }

}
