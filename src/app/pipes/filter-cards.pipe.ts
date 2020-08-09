import { ISearchItem } from './../models/search-item.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCards'
})
export class FilterCardsPipe implements PipeTransform {

  public transform(items: ISearchItem[], search: string = ''): ISearchItem[] {

    if (!search.trim()) {
      return items;
    }
    return items.filter((item) => item.snippet.title.toLowerCase().includes(search));
  }
}
