import { useAppDispatch } from '@/store/hooks';
import { FC, useCallback } from 'react';
import { useParams } from 'react-router';
import { RouteParamsType } from '@/components/types';
import useRefetch from '@/commons/useRefetch';
import { getNewsDetail } from '@/store/newsSlice';
import NewsDetail from '@/components/NewsDetail';
import { useErrorBoundary } from 'react-error-boundary';

const NewsDetailPage: FC = () => {
  const { id } = useParams<RouteParamsType>();
  const { showBoundary } = useErrorBoundary();
  const dispatch = useAppDispatch();

  const getCurrentNews = useCallback(
    async (id: number) => {
      await dispatch(getNewsDetail(id));
    },
    [dispatch],
  );

  useRefetch(() => {
    getCurrentNews(Number(id)).catch(showBoundary);
  });

  return (
    <NewsDetail
      onPressReload={() => {
        getCurrentNews(Number(id)).catch(showBoundary);
      }}
    />
  );
};

export default NewsDetailPage;
