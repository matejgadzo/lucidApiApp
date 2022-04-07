import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/data/article.model';
import { FilterService } from 'src/app/services/filter-service.service';

@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.css']
})
export class DataViewComponent implements OnInit {
  articles: Article[] = [];
  constructor(
    private filterService: FilterService
  ) { }

  ngOnInit(): void {
    //console.log();

    this.filterService.getAllArticles().subscribe( article => {
     console.log(article);
    });
  }

}
