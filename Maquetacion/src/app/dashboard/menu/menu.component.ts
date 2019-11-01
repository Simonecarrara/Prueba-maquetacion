import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { homedir } from 'os';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit {
  
  nasa=[{
    icon: "library_books",
    txt: "NASA Graphic Standards"
  },{
    icon: "perm_media",
    txt: "Ficheros y documentos"
  },{
    icon: "perm_media",
    txt: "Galería de fotos"
  },{
    icon: "insert_chart",
    txt: "Estadisticas e indicadores"
  },{
    icon: "color_lens",
    txt: "Design on demand"
  }];


  constructor() { }

  ngOnInit() {
  }
  
  



}
