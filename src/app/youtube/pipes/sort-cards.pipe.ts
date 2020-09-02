import { Pipe, PipeTransform } from '@angular/core';
import { ISortOptions } from './../models/sort-options.model';
import { ISearchItem } from './../models/search-item.model';

@Pipe({
  name: 'sortCards'
})
export class SortCardsPipe implements PipeTransform {

  public getDate: (item: ISearchItem) => number =
    (item: ISearchItem): number => Date.parse(item.snippet.publishedAt)

  public getViews: (item: ISearchItem) => number =
  (item: ISearchItem): number => +item.statistics.viewCount

  public transform(items: ISearchItem[], sortOptions: ISortOptions): ISearchItem[] {

    if (sortOptions === null) { return items; }
    const directionModificator: 1 | -1 = (sortOptions.sortDirection === 'up') ? 1 : -1;
    const func: ( item: ISearchItem ) => number =
      (sortOptions.sort === 'date') ? this.getDate : this.getViews;

    return items.sort((el1, el2) => (func(el1) - func(el2)) * directionModificator);
  }
}
