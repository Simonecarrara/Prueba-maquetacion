import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  btnTxt="Cerrar Sidebar";

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
  }

  onBtnToggle(isOpen){
    this.dashboardService.isOpened.emit(isOpen);
    if(isOpen){
      this.btnTxt="Cerrar SideBar";
    }else{
      this.btnTxt="Abrir Sidebar";
    }

  }

}
