import { ISearchItemThumbnail } from './search-item-thumbnail.model';

export interface ISearchItemSnippet {
  categoryId?: string;
  channelId: string;
  channelTitle: string;
  defaultAudioLanguage?: string;
  defaultLanguage?: string;
  description: string;
  liveBroadcastContent: string;
  localized?: {
    title: string;
    description: string;
  };
  publishTime?: string;
  publishedAt: string;
  tags?: string[];
  thumbnails: { [key: string]: ISearchItemThumbnail };
  title: string;
}
