import { useCallback, useEffect, useState } from 'react';
import { getNews } from '@/requests/requests';
import { useAppDispatch } from '@/store/hooks';
import { setNews, updateComments } from '@/store/newsSlice';

const useGetNewById = (id?: string) => {
  const [error, setError] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const getData = useCallback(
    async (newsId: number) => {
      try {
        const data = await getNews(newsId);
        if (error) {
          setError(false);
        }
        return data;
      } catch (e) {
        setError(true);
      }
    },
    [error],
  );

  const fetchComments = useCallback(
    async (newsId?: number) => {
      if (newsId) {
        const data = await getData(newsId);
        if (data) {
          dispatch(updateComments(data.comments));
        }
      }
    },
    [dispatch, getData],
  );

  useEffect(() => {
    if (id) {
      getData(+id).then((res) => {
        if (res) {
          dispatch(setNews(res));
        }
      });
    }
  }, [dispatch, getData, id]);

  return { error, fetchComments };
};

export default useGetNewById;
