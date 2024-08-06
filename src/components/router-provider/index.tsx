import { FC, useLayoutEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router';
import { ERROR_PAGE, MAIN_PAGE_ROUTE, NEWS_LIST_ROUTE, NEWS_PAGE_ROUTE } from '@/constants/routes';
import ErrorPage from '@/pages/ErrorPage/ErrorPage';
import { ErrorBoundary } from 'react-error-boundary';
import NewsList from '@/pages/NewsListPage/NewsList';
import NewsDetailPage from '@/pages/NewsDetailPage/NewsDetailPage';

const AppRouterProvider: FC = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <ErrorBoundary fallback={<ErrorPage />}>
      <Routes location={location}>
        <Route path={ERROR_PAGE} element={<ErrorPage />} />
        <Route path={MAIN_PAGE_ROUTE} element={<NewsList />} />
        <Route path={NEWS_LIST_ROUTE} element={<NewsList />} />
        <Route path={NEWS_PAGE_ROUTE} element={<NewsDetailPage />} />
      </Routes>
    </ErrorBoundary>
  );
};

export default AppRouterProvider;
