import { ISearchItemSnippet } from './search-item-snippet.model';

export interface IVideoResponseItem {
  kind: string;
  etag: string;
  id: {
    kind: string;
    videoId: string;
  };
  snippet: ISearchItemSnippet;
}
