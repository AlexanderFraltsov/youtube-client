import { ISearchItemThumbnail } from './search-item-thumbnail.model';

export interface ISearchItemSnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: { [key: string]: ISearchItemThumbnail };
  channelTitle: string;
  tags: Array<string>;
  categoryId: string;
  liveBroadcastContent: string;
  localized: {
    title: string;
    description: string;
  };
  defaultAudioLanguage: string;
}
