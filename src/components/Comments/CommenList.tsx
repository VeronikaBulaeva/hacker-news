import Comments from '@/components/Comments/Comments';
import { NewsItemType } from '@/components/types';
import { useAppSelector } from '@/store/hooks.ts';
import { isCommentsFetchingSelector } from '@/store/newsSlice.ts';
import Loader from '@/components/Loader/Loader.tsx';

type CommentListType = {
  currentNews: NewsItemType;
};

const CommentList = ({ currentNews }: CommentListType) => {
  const isCommentsFetching = useAppSelector(isCommentsFetchingSelector);

  return (
    <>
      {isCommentsFetching && <Loader />}
      {currentNews.comments.map((comment) =>
        !comment.deleted || !comment.dead ?
          <Comments {...comment} key={comment.id} />
          : null,
      )}
    </>
  );
};
export default CommentList;
