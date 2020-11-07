import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sys-pedidos-layout',
  templateUrl: './sys-pedidos-layout.component.html',
  styleUrls: ['./sys-pedidos-layout.component.css']
})
export class SysPedidosLayoutComponent implements OnInit {

  showFiller
  

  @ViewChild('drawer') drawer: MatDrawer;
  constructor() { }

  ngOnInit() {
    //this.toggle()
  }

  //toggle() {
  //  this.sidenav.toggle(true);
  //}
  

}
