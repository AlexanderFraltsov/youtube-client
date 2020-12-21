import { Pipe, PipeTransform } from '@angular/core';
import { ISearchItem } from '../../shared/models/search-item.model';

@Pipe({
  name: 'filterCards'
})
export class FilterCardsPipe implements PipeTransform {

  public transform(items: ISearchItem[], search: string = ''): ISearchItem[] {
    if (!items) { return null; }
    if (!search.trim()) {
      return items;
    }
    return items.filter((item) => item.snippet.title.toLowerCase().includes(search));
  }
}
