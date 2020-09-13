import { IState } from '../state.model';
import { ISearchItem } from '../../shared/models/search-item.model';
import { ICustomCard } from '../../shared/models/custom-card.model';
import { selectYoutubeCards } from './select-youtube.cards.selector';
import { selectCustomCards } from './select-custom-cards.selector';
import { createSelector, MemoizedSelector } from '@ngrx/store';

const transformCustomCards: (card: ICustomCard) => ISearchItem = (card: ICustomCard) => {
  return {
    kind: '',
    etag: '',
    id: card.link,
    snippet: {
      description: card.description,
      publishedAt: card.publishedAt,
      title: card.title,
      thumbnails: {
        medium: {
          url: card.image,
          width: 480,
          height: 320
        }
      }
    },
    statistics: {
      viewCount: '0',
      likeCount: '0',
      dislikeCount: '0',
      commentCount: '0'
    }
  };
};

export const selectAllCards: MemoizedSelector<IState, ISearchItem[]> = createSelector(
  selectCustomCards,
  selectYoutubeCards,
  (customCards, cards) => {
    return [ ...cards, ...customCards.map(transformCustomCards) ];
  }
);
