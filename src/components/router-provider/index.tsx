import { FC, lazy, Suspense, useLayoutEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router';
import { ERROR_PAGE, MAIN_PAGE_ROUTE, NEWS_LIST_ROUTE, NEWS_PAGE_ROUTE } from '@/constants/routes';
import ErrorPage from '@/pages/ErrorPage/ErrorPage';
import Loader from '@/components/Loader/Loader';
import { ErrorBoundary } from 'react-error-boundary';

const NewsDetail = lazy(() => import('@/pages/NewsDetail/NewsDetail'));
const NewsList = lazy(() => import('@/pages/NewsListPage/NewsList'));

const AppRouterProvider: FC = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Routes location={location}>
      <Route path={ERROR_PAGE} element={<ErrorPage />} />
      <Route
        path={MAIN_PAGE_ROUTE}
        element={
          <ErrorBoundary fallback={<ErrorPage />}>
            <Suspense fallback={<Loader />}>
              <NewsList />
            </Suspense>
          </ErrorBoundary>
        }
      />
      <Route
        path={NEWS_LIST_ROUTE}
        element={
          <ErrorBoundary fallback={<ErrorPage />}>
            <Suspense fallback={<Loader />}>
              <NewsList />
            </Suspense>
          </ErrorBoundary>
        }
      />
      <Route
        path={NEWS_PAGE_ROUTE}
        element={
          <Suspense fallback={<Loader />}>
            <ErrorBoundary fallback={<ErrorPage />}>
              <NewsDetail />
            </ErrorBoundary>
          </Suspense>
        }
      />
    </Routes>
  );
};

export default AppRouterProvider;
