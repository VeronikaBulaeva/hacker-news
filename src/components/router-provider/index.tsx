import { FC, useLayoutEffect } from "react";
import { Route, Routes, useLocation } from "react-router";
import {
  ERROR_PAGE,
  MAIN_PAGE_ROUTE,
  NEWS_LIST_ROUTE,
  NEWS_PAGE_ROUTE,
} from "@/constants/routes";
import NewsList from "@/pages/NewsListPage/NewsList";
import NewsPage from "@/pages/NewsPage/NewsPage";
import ErrorPage from "@/pages/ErrorPage/ErrorPage";

const AppRouterProvider: FC = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Routes location={location}>
      <Route path={ERROR_PAGE} element={<ErrorPage />} />
      <Route path={MAIN_PAGE_ROUTE} element={<NewsList />} />
      <Route path={NEWS_LIST_ROUTE} element={<NewsList />} />
      <Route path={NEWS_PAGE_ROUTE} element={<NewsPage />} />
    </Routes>
  );
};

export default AppRouterProvider;