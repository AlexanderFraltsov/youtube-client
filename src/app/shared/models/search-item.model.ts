import { ISearchItemStatistics } from './search-item-statistics.model';
import { ISearchItemSnippet } from './search-item-snippet.model';

export interface ISearchItem {
  kind: string;
  etag: string;
  id: string;
  snippet: ISearchItemSnippet;
  statistics: ISearchItemStatistics;
}
