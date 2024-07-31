import {FC, lazy, Suspense, useLayoutEffect} from 'react';
import {Route, Routes, useLocation} from 'react-router';
import {ERROR_PAGE, MAIN_PAGE_ROUTE, NEWS_LIST_ROUTE, NEWS_PAGE_ROUTE} from '@/constants/routes';
import NewsList from '@/pages/NewsListPage/NewsList';
import ErrorPage from '@/pages/ErrorPage/ErrorPage';
import Loader from '@/components/Loader/Loader';
// import OneNewsPage from '@/pages/OneNewsPage/OneNewsPage';

const AppRouterProvider: FC = () => {
  const OneNewsPage = lazy(() => import('@/pages/OneNewsPage/OneNewsPage'));

  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Routes location={location}>
      <Route path={ERROR_PAGE} element={<ErrorPage />} />
      <Route path={MAIN_PAGE_ROUTE} element={<NewsList />} />
      <Route path={NEWS_LIST_ROUTE} element={<NewsList />} />
      <Route
        path={NEWS_PAGE_ROUTE}
        element={
          <Suspense fallback={<Loader />}>
            <OneNewsPage />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default AppRouterProvider;
