import { ICardRender } from './../models/card-render.model';
import { Pipe, PipeTransform } from '@angular/core';
import { ISearchItem } from '../models/search-item.model';

@Pipe({
  name: 'cardToRender'
})
export class CardToRenderPipe implements PipeTransform {

  public transform(item: ISearchItem): ICardRender {
    const {publishedAt, description, title, thumbnails} = item.snippet;
    const {commentCount, dislikeCount, likeCount, viewCount} = item.statistics;
    const image: string = thumbnails.medium.url;
    const now: number = Date.now();
    const msInDay: number = 1000 * 3600 * 24;
    const daysDiff: number = (now - Date.parse(publishedAt)) / msInDay;

    let borderColor: 'yellow' | 'green' | 'blue' | 'red' = 'yellow';
    if (daysDiff < 30) { borderColor = 'green'; }
    if (daysDiff < 7) { borderColor = 'blue'; }
    if (daysDiff > 30 * 6) { borderColor = 'red'; }

    return {
      publishedAt,
      description,
      title,
      image,
      commentCount,
      dislikeCount,
      likeCount,
      viewCount,
      borderColor
    };
  }
}
