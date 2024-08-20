import { NewsItemType } from '@/components/types';

export type CommentType = {
  content: string;
  comments: NewsItemType[];
  user: string | null;
  time_ago: string;
  deleted?: boolean;
  dead?: boolean;
};
