import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface MenuOption{
  name: string;
  icon: string;
  url: string;
}

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css'],
  animations: [
    trigger('hamburguerX', [
      state('hamburguer', style({})),
      state('topX', style({
        transform: 'rotate(45deg)', 
        transformOrigin: 'left',
        margin: '6px'
      })),
      state('hide', style({
        opacity: 0
      })),
      state('bottomX', style({
        transform: 'rotate(-45deg)',
        transformOrigin: 'left',
        margin: '6px'
      })),
      transition('* => *', [
        animate('0.2s')
      ]),
    ]),
  ]
})
export class DashboardPageComponent implements OnInit {

  changeText: boolean = false;
  @ViewChild('drawer') drawer: any;

  menuOptions: MenuOption[] = [
    {
      name: 'home',
      icon: 'home',
      url:'/dashboard/home'
    },
    {
      name: 'configuration',
      icon: 'settings',
      url:'/dashboard/config'
    },
    {
      name: 'logout',
      icon: 'logout',
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
