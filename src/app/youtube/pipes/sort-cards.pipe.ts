import { Pipe, PipeTransform } from '@angular/core';
import { ISearchItem } from '../../shared/models/search-item.model';
import { ISortOptions } from '../models/sort-options.model';

@Pipe({
  name: 'sortCards'
})
export class SortCardsPipe implements PipeTransform {
  private getDate: (item: ISearchItem) => number =
    (item: ISearchItem): number => Date.parse(item.snippet.publishedAt)

  private getViews: (item: ISearchItem) => number =
    (item: ISearchItem): number => +item.statistics.viewCount

  public transform(items: ISearchItem[], sortOptions: ISortOptions): ISearchItem[] {

    if (!items) { return null; }
    if (sortOptions === null) { return items; }
    const directionModificator: 1 | -1 = (sortOptions.sortDirection === 'up') ? 1 : -1;
    const func: ( item: ISearchItem ) => number =
    (sortOptions.sort === 'date') ? this.getDate : this.getViews;

    return [...items].sort(
      (el1, el2) => (func(el1) - func(el2)) * directionModificator
    );
  }
}
