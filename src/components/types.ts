export interface NewsItemType {
  id: number;
  title: string;
  points: number | null;
  user: string | null;
  time: number;
  time_ago: string;
  content: string;
  deleted?: boolean;
  dead?: boolean;
  url?: string;
  comments: NewsItemType[];
  comments_count: number;
}

export type NewsListItemType = Pick<NewsItemType, 'title' | 'user' | 'time_ago' | 'id' | 'points' | 'comments_count'>;

export type RouteParamsType = {
  id: string;
};
