import { FC } from 'react';
import { MainSection } from '@/components/style';
import { Typography } from '@mui/material';
import ButtonLink from '@/commons/Button.tsx';
import { Link } from 'react-router-dom';
import { MAIN_PAGE_ROUTE } from '@/constants/routes.ts';
import { useErrorBoundary } from 'react-error-boundary';

const ErrorPage: FC = () => {
  const { resetBoundary } = useErrorBoundary();

  return (
    <MainSection>
      <Typography variant="h1" color="text.primary" textAlign="center" mt={5}>
        Страница не найдена
      </Typography>
      <ButtonLink component={Link} to={MAIN_PAGE_ROUTE} color="primary" onClick={resetBoundary}
                  sx={{ maxWidth: 'max-content', mt: 5, p: 2, justifySelf: 'center' }}>
        <Typography variant="h1" color="text.primary">Вернуться на главную</Typography>
      </ButtonLink>
    </MainSection>
  );
};
export default ErrorPage;
