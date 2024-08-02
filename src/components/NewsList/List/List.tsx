import { FC } from 'react';
import { useAppSelector } from '@/store/hooks';
import { loadingSelector, newsListSelector } from '@/store/newsSlice';
import NewsItem from '@/components/NewsList/NewsItem/NewsItem';
import { styled, Typography } from '@mui/material';
import ButtonLink from '@/commons/Button';
import { useParams } from 'react-router';
import { RouteParamsType } from '@/components/types';
import Loader from '@/components/Loader/Loader';

const List: FC = () => {
  const newsList = useAppSelector(newsListSelector);
  const { id = 1 } = useParams<RouteParamsType>();
  const isLoading = useAppSelector(loadingSelector);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <GridSection>
        {newsList.map((news) => (
          <NewsItem {...news} key={news.id} />
        ))}
      </GridSection>
      <PageNumberBox>
        {Array(4)
          .fill('')
          .map((_, index) => (
            <LinkButton
              sx={+id === index + 1 ? { backgroundColor: 'secondary.main' } : undefined}
              to={`/newsList/${index + 1}`}
              key={index}
            >
              <Typography variant="subtitle2" color="text.primary">
                {index + 1}
              </Typography>
            </LinkButton>
          ))}
      </PageNumberBox>
    </>
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

const PageNumberBox = styled('div')`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-inline: auto;
  margin-block: 40px;

  ${({ theme }) => theme.breakpoints.down('md')} {
    max-width: none;
    margin-inline: 50px;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    margin-inline: 20px;
  }
`;

const LinkButton = styled(ButtonLink)`
  align-items: center;
  max-width: max-content;
  margin-top: 16px;
  padding: 16px 20px;
`;

export default List;
