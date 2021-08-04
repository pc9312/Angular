import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, take, takeLast, tap } from 'rxjs/operators';
import { ModelDetails } from 'src/app/data-model/model-details.model';
import { ErrorDialogComponent } from 'src/app/dialog/error-dialog/error-dialog.component';
import { ModelService } from 'src/app/services/model.service';

@Component({
  selector: 'app-config-page',
  templateUrl: './config-page.component.html',
  styleUrls: ['./config-page.component.css']
})
export class ConfigPageComponent implements OnInit {

  modelList: Observable<ModelDetails[]> = new Observable();
  totalDataCount: number  = 0;
  
  lowValue: number = 0;
  highValue: number = 5;

  constructor(
    private modelService: ModelService,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.modelList = this.modelService.getModelList()
    .pipe(
      tap(data => {
        this.totalDataCount = data.length;
      }),
      catchError((error) => {
        // it's important that we log an error here.
        // Otherwise you won't see an error in the console.
        let errorMessage = "No Network. Please check the connection."
        this.showErrorDialog(errorMessage);
        return of([]);
      })
    );
  }

  onAddModule(index: number) {
    this.modelService.selectedModelIndex = index;
    this.router.navigate(['./details'], { relativeTo: this.route });
  }

  getPaginatorData(event: PageEvent): PageEvent {
    this.lowValue = event.pageIndex * event.pageSize;
    this.highValue = this.lowValue + event.pageSize;
    return event;
  }

  private showErrorDialog(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage
    });
  }

}
