import { ISearchItemSnippet } from './search-item-snippet.model';

export interface ISearchItem {
  kind: string;
  etag: string;
  id: string;
  snippet: ISearchItemSnippet;
  statistics: {
    viewCount: string,
    likeCount: string,
    dislikeCount: string,
    favoriteCount: string,
    commentCount: string
  };
}
