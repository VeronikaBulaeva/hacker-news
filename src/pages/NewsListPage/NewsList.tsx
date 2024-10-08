import { useCallback, useEffect } from 'react';
import { useParams } from 'react-router';
import { RouteParamsType } from '@/components/types';
import { MainSection, UpdateButton } from '@/components/style';
import CachedIcon from '@mui/icons-material/Cached';
import useRefetch from '@/commons/useRefetch';
import { useErrorBoundary } from 'react-error-boundary';
import { getAllNews } from '@/store/newsSlice';
import { useAppDispatch } from '@/store/hooks';
import List from '@/components/NewsList/List/List';

const NewsList = () => {
  const { id = 1 } = useParams<RouteParamsType>();
  const { showBoundary } = useErrorBoundary();
  const dispatch = useAppDispatch();

  const fetchData = useCallback(
    async (page: number) => {
      await dispatch(getAllNews(page));
    },
    [dispatch],
  );

  useRefetch(() => {
    fetchData(+id).catch(showBoundary);
  });

  useEffect(() => {
    fetchData(+id).catch(showBoundary);
  }, [fetchData, id, showBoundary]);

  return (
    <MainSection>
      <UpdateButton component="button" onClick={() => fetchData(+id)}>
        <CachedIcon sx={{ fontSize: 25, color: 'background.paper' }} />
      </UpdateButton>
      <List />
    </MainSection>
  );
};

export default NewsList;
