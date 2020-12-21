
import { Pipe, PipeTransform } from '@angular/core';
import { ICardRender } from '../models/card-render.model';
import { ISearchItem } from '../models/search-item.model';
import { TIME_PERIODS, MS_IN_DAY } from 'src/app/constants/common-constants';

@Pipe({
  name: 'cardToRender'
})
export class CardToRenderPipe implements PipeTransform {
  public transform(item: ISearchItem): ICardRender {
    if (!item) {
      return;
    }
    const { id } = item;
    const { publishedAt, description, title, thumbnails } = item.snippet;
    const { commentCount, dislikeCount, likeCount, viewCount } = item.statistics;
    const image: string = thumbnails.medium.url;
    const imageBig: string = thumbnails.maxres?.url || thumbnails.high?.url || thumbnails.default?.url ||
    thumbnails.medium?.url || thumbnails.standard?.url;
    let borderColor: string | null = null;
    const daysDiff: number = (Date.now() - Date.parse(publishedAt)) / MS_IN_DAY;

    const { SHORT, MEDIUM, LONG } = TIME_PERIODS;
    if (daysDiff < MEDIUM.DAYS) { borderColor = MEDIUM.COLOR; }
    if (daysDiff < SHORT.DAYS) { borderColor = SHORT.COLOR; }
    if (daysDiff > LONG.DAYS) { borderColor = LONG.COLOR; }

    return {
      publishedAt,
      description,
      title,
      image,
      imageBig,
      commentCount,
      dislikeCount,
      likeCount,
      viewCount,
      borderColor,
      id
    };
  }
}
