import Comments from '@/components/Comments/Comments';
import { FC } from 'react';
import { NewsItemType } from '@/components/types';

type CommentListType = {
  currentNews: NewsItemType;
};

const CommentList: FC<CommentListType> = ({ currentNews }) => {
  return (
    <>
      {currentNews.comments
        .filter((comment) => !comment.deleted || !comment.dead)
        .map((comment) => (
          <Comments {...comment} key={comment.id} />
        ))}
    </>
  );
};
export default CommentList;
