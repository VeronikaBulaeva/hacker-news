export interface FeedDataType {
  id: number;
  title: string;
  points: number | null;
  user: string | null;
  time: number;
  time_ago: string;
  content: string;
  deleted?: boolean;
  dead?: boolean;
  type: string;
  url?: string;
  domain?: string;
  comments: FeedDataType[];
  level: number;
  comments_count: number;
}

export type ItemDataType = Pick<
  FeedDataType,
  "title" | "user" | "time_ago" | "id" | "points" | "comments_count"
>;

export type RouteParamsType = {
  id: string;
};
