import { Pipe, PipeTransform } from '@angular/core';
import { ICardRender } from '../models/card-render.model';
import { ISearchItem } from '../models/search-item.model';
import { MS_IN_DAY, TIME_PERIODS } from '../../constants/common-constants';

@Pipe({
  name: 'cardToRender'
})
export class CardToRenderPipe implements PipeTransform {

  public transform(item: ISearchItem): ICardRender {
    const { publishedAt, description, title, thumbnails } = item.snippet;
    const { commentCount, dislikeCount, likeCount, viewCount } = item.statistics;
    const image: string = thumbnails.medium.url;
    const daysDiff: number = (Date.now() - Date.parse(publishedAt)) / MS_IN_DAY;

    const { SHORT, MEDIUM, LONG } = TIME_PERIODS;
    let borderColor: string | null = null;
    if (daysDiff < MEDIUM.DAYS) { borderColor = MEDIUM.COLOR; }
    if (daysDiff < SHORT.DAYS) { borderColor = SHORT.COLOR; }
    if (daysDiff > LONG.DAYS) { borderColor = LONG.COLOR; }

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
