import { YoutubeService } from './../services/youtube.service';
import { Pipe, PipeTransform } from '@angular/core';
import { ICardRender } from '../models/card-render.model';
import { ISearchItem } from '../models/search-item.model';

@Pipe({
  name: 'cardToRender'
})
export class CardToRenderPipe implements PipeTransform {
  constructor(public yotubeService: YoutubeService) { }
  public transform(item: ISearchItem): ICardRender {
    return this.yotubeService.itemToCard(item);
  }
}
