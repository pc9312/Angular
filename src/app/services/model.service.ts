import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, take, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { API_URLS } from '../api-urls';
import { ModelDetails } from '../data-model/model-details.model';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  private modelList: ModelDetails[] = [];
  selectedModelIndex: number = -1;

  constructor(
    private http: HttpClient
  ) { }

  get selectedModelDetails(){
    return {...this.modelList[this.selectedModelIndex]};
  }

  set selectedModelIndexDetails(index: number){
    this.selectedModelIndex = index;
  }

  getModelList(): Observable<ModelDetails[]> {
    const apiUrl = `
      ${environment.apiServer.host}:${environment.apiServer.port}${API_URLS.modelList.url}
    `;
    return this.http.get<ModelDetails[]>(apiUrl).pipe(
      tap(data => {
        this.modelList = data;
      })
    );
  }

  getLocationList() {
    const apiUrl = `
      ${environment.apiServer.host}:${environment.apiServer.port}${API_URLS.locationList.url}
    `;
    return this.http.get(apiUrl);
  }

  getModelConfigDetails() { }

  saveModelConfigDetails() { }
}
