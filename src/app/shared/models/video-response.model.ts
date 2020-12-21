import { IVideoResponseItem } from './video-response-item.model';

export interface IVideoResponse {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: IVideoResponseItem[];
}
