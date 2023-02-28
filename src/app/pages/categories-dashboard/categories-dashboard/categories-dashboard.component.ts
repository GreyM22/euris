import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {CategoriesService} from "../../../services/state-data/categories.service";
import {map, Observable} from "rxjs";
import {CategoryCount} from "../../../interfaces/category-count.interface";
import {ChartConfiguration, ChartOptions} from "chart.js";

@Component({
  selector: 'euris-categories-dashboard',
  templateUrl: './categories-dashboard.component.html',
  styleUrls: ['./categories-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesDashboardComponent implements OnInit {

  constructor(private categoriesService: CategoriesService) { }
  public pieChartOptions: ChartOptions<'polarArea'> = {
    responsive: true,
    maintainAspectRatio: false
  };
  public pieChartLegend = true;
  categories$: Observable<CategoryCount[]> = this.categoriesService.getCategories$();
  data$: Observable<ChartConfiguration<'polarArea'>['data']> = this.categoriesService.getCategories$().pipe(
    map(categories => ({
      labels: categories.reduce<string[]>((acc, draft) => {
        acc.push(draft.category);
        return acc;
      },[]),
      datasets: [{
        data: categories.reduce<number[]>((acc, category) => {
          acc.push(category.numberOfProducts);
          return acc;
        }, [])
      }]}))
  );
  loading$: Observable<boolean> = this.categoriesService.loading$();
  ngOnInit(): void {
    this.categories$.subscribe(r => console.log('categories', r));
  }

}
