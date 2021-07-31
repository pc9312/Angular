import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ModelDetails } from 'src/app/data-model/model-details.model';
import { ModelService } from 'src/app/services/model.service';

@Component({
  selector: 'app-config-page',
  templateUrl: './config-page.component.html',
  styleUrls: ['./config-page.component.css']
})
export class ConfigPageComponent implements OnInit {

  modelList: Observable<ModelDetails[]> = this.modelService.getModelList();

  constructor(
    private modelService: ModelService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  onAddModule(index: number) {
    this.modelService.selectedModelIndex = index;
    this.router.navigate(['./details'], { relativeTo: this.route });
  }

}
