import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, AfterViewInit } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';
import { Menu, NavService } from '../../services/nav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit , AfterViewInit{

  user
  public menuItems : Menu[];
  public items : Menu [];
  public elem : any;
  public sidenavtoggled1 : any;

  constructor(
    public navServices: NavService,
    @Inject(DOCUMENT) private document: any,
  ) { }

  

  toggleFullScreen() {
    this.navServices.fullScreen = !this.navServices.fullScreen;
    if (this.navServices.fullScreen) {
      if (this.elem.requestFullscreen) {
        this.elem.requestFullscreen();
      } else if (this.elem.mozRequestFullScreen) {
        /* Firefox */
        this.elem.mozRequestFullScreen();
      } else if (this.elem.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        this.elem.webkitRequestFullscreen();
      } else if (this.elem.msRequestFullscreen) {
        /* IE/Edge */
        this.elem.msRequestFullscreen();
      }
    } else {
      if (!this.document.exitFullscreen) {
        this.document.exitFullscreen();
      } else if (this.document.mozCancelFullScreen) {
        /* Firefox */
        this.document.mozCancelFullScreen();
      } else if (this.document.webkitExitFullscreen) {
        /* Chrome, Safari and Opera */
        this.document.webkitExitFullscreen();
      } else if (this.document.msExitFullscreen) {
        /* IE/Edge */
        this.document.msExitFullscreen();
      }
    }
  }

  sidebarToggle() {
    this.navServices.collapseSidebar = !this.navServices.collapseSidebar;
    this.navServices.megaMenu = false;
  }

  ngOnInit(): void {
    this.user= this.navServices.getUser()
    this.elem = document.documentElement;
    this.navServices.items.subscribe(menuItems => this.items = this.menuItems);
  }
  ngAfterViewInit(){
    const sidebar = document.querySelector('.app-sidebar');
    const messageMenu = document.querySelector('.message-menu');
    const notifyMenu = document.querySelector('.notify-menu');
    let ps = new PerfectScrollbar(sidebar, { wheelPropagation: false });
    let ps1 = new PerfectScrollbar(messageMenu, { wheelPropagation: false });
    let ps2 = new PerfectScrollbar(notifyMenu, { wheelPropagation: false });
  }

  searchAdd() {  
    document.querySelector('body').classList.add('search-show')
  }
  searchRemove() {  
    document.querySelector('body').classList.remove('search-show')
  }

}
