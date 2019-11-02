import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit {
  colaboradores="3";
  espacio=50;
  espacio_st=this.espacio+"";

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

  user=[{
    icon: "library_books",
    txt: "Mi perfil"
  },{
    icon: "perm_media",
    txt: "Formación"
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
