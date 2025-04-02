import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  @ViewChild(MatSidenav, {static: true})
  sidenav!: MatSidenav;

  constructor(private observer: BreakpointObserver) {

  }

  ngOnInit(): void {
    this.observer.observe(["(max-width: 500px)"])
    .subscribe((res) => {
      if(res.matches) {
        this.sidenav.mode = "over";
        this.sidenav.close();
      } else {
        this.sidenav.mode = "side";
        this.sidenav.close();
      }
    })
  }

  isSolicitudesOpen = false;
  isInformesOpen = false;

  toggleSolicitudes() {
    this.isSolicitudesOpen = !this.isSolicitudesOpen;
  }

  toggleInformes() {
    this.isInformesOpen = !this.isInformesOpen;
  }
}
