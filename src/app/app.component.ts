import { Component, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LoadingService } from './services/loading.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked {
  title = 'infinit';
  displayLoader: Observable<boolean> = this.loadingService.loading();

  constructor(
    private loadingService: LoadingService,
    private cd: ChangeDetectorRef  
  ){}

  ngAfterViewChecked(){
    this.cd.detectChanges();
  }
}
