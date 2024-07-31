import { useAppDispatch } from '@/store/hooks';
import { FC, useEffect } from 'react';
import { useParams } from 'react-router';
import { RouteParamsType } from '@/components/types';
import useGetNewById from '@/pages/OneNewsPage/useGetNewById';
import useRefetch from '@/commons/useRefetch';
import { setNews } from '@/store/newsSlice';
import ErrorPage from '@/pages/ErrorPage/ErrorPage';
import OneNews from '@/components/OneNews';

const OneNewsPage: FC = () => {
  const { id } = useParams<RouteParamsType>();
  const { fetchComments, error } = useGetNewById(id);
  const dispatch = useAppDispatch();

  useRefetch(() => {
    fetchComments(Number(id));
  });

  useEffect(() => {
    return () => {
      dispatch(setNews(null));
    };
  }, [dispatch]);

  if (error) {
    return <ErrorPage />;
  }

  return <OneNews />;
};

export default OneNewsPage;
