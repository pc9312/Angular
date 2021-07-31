import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private loader: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  loading(){
    return this.loader.asObservable();
  }

  showLoader(){
    console.log("Show")
    this.loader.next(true);
  }

  hideLoader(){
    this.loader.next(false);
  }

}
