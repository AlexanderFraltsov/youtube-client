import { ISearchItemThumbnail } from './search-item-thumbnail.model';

export interface ISearchItemSnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: { [key: string]: ISearchItemThumbnail };
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  localized: {
    title: string;
    description: string;
  };
  defaultLanguage?: string;
  defaultAudioLanguage: string;
}
