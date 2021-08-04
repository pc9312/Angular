import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface MenuOption{
  name: string;
  url: string;
}

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  changeText: boolean = false;
  @ViewChild('drawer') drawer: any;

  menuOptions: MenuOption[] = [
    {
      name: 'home',
      url:'/dashboard/home'
    },
    {
      name: 'configuration',
      url:'/dashboard/config'
    },
    {
      name: 'logout',
      url:'/auth'
    }
  ]

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { this.changeText = false;}

  ngOnInit(): void {
  }

  navigate(menu: MenuOption){
    this.drawer.toggle();
    // this.router.navigate([menu.url]);
  }

}
