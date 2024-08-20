import { useAppDispatch } from '@/store/hooks';
import { useCallback } from 'react';
import { useParams } from 'react-router';
import { RouteParamsType } from '@/components/types';
import useRefetch from '@/commons/useRefetch';
import { getComments, getNewsDetail } from '@/store/newsSlice';
import NewsDetail from '@/components/NewsDetail';
import { useErrorBoundary } from 'react-error-boundary';

const NewsDetailPage = () => {
  const { id } = useParams<RouteParamsType>();
  const { showBoundary } = useErrorBoundary();
  const dispatch = useAppDispatch();

  const getCurrentNews = useCallback(
    async (id: number) => {
      await dispatch(getNewsDetail(id));
    },
    [dispatch],
  );

  const updateComments = useCallback(async (id: number) => {
    dispatch(getComments(Number(id)));
  }, [dispatch]);

  useRefetch(() => {
    getCurrentNews(Number(id)).catch(showBoundary);
  });

  return (
    <NewsDetail
      onPressReload={() => {
        updateComments(Number(id)).catch(showBoundary);
      }}
    />
  );
};

export default NewsDetailPage;
