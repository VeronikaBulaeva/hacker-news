import { FC, Suspense } from 'react';
import { useAppSelector } from '@/store/hooks';
import { newsListSelector } from '@/store/newsSlice';
import NewsItem from '@/components/NewsList/NewsItem/NewsItem';
import { styled } from '@mui/material';
import Loader from '@/components/Loader/Loader';

const List: FC = () => {
  const newsList = useAppSelector(newsListSelector);

  return (
    <Suspense fallback={<Loader />}>
      <GridSection>
        {newsList.map((news) => (
          <NewsItem {...news} key={news.id} />
        ))}
      </GridSection>
    </Suspense>
  );
};
const GridSection = styled('section')`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 34px;

  ${({ theme }) => theme.breakpoints.down('lg')} {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px 24px;
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
  }
`;

export default List;
