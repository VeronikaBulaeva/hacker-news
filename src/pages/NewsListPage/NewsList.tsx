import { FC, lazy, Suspense } from 'react';
// import List from '@/components/NewsList/List/List';
import { useParams } from 'react-router';
import { RouteParamsType } from '@/components/types';
import { MainSection, UpdateButton } from '@/components/style';
import Reload from '@/assets/reload.svg';
import ButtonLink from '@/commons/Button';
import { styled, Typography } from '@mui/material';
import useRefetch from '@/commons/useRefetch';
import Loader from '@/components/Loader/Loader';
import useGetNewsList from '@/pages/NewsListPage/useGetNewsList';
import ErrorPage from '@/pages/ErrorPage/ErrorPage';

const NewsList: FC = () => {
  const List = lazy(() => import('@/components/NewsList/List/List'));
  const { id = 1 } = useParams<RouteParamsType>();

  const { fetchData, error } = useGetNewsList(+id);

  useRefetch(() => {
    fetchData(+id);
  });

  if (error) {
    return <ErrorPage />;
  }

  return (
    <MainSection>
      <UpdateButton component="button" onClick={() => window.location.reload()}>
        <img src={Reload} alt={'back'} width={20} height={20} />
      </UpdateButton>
      <Suspense fallback={<Loader />}>
        <List />
      </Suspense>
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
    </MainSection>
  );
};

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

export default NewsList;
