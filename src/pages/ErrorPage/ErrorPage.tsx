import { FC } from 'react';
import { MainSection } from '@/components/style';
import { Typography } from '@mui/material';

const ErrorPage: FC = () => {
  return (
    <MainSection>
      <Typography variant="h1" color="text.primary">
        Страница не найдена
      </Typography>
    </MainSection>
  );
};
export default ErrorPage;
