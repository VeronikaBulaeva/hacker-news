import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';
import { NewsItemType, NewsListItemType } from '@/components/types';

export interface NewsState {
  newsList: NewsListItemType[];
  currentNews: NewsItemType | null;
}

const initialState: NewsState = {
  newsList: [],
  currentNews: null,
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setNewsList: (store, action: PayloadAction<NewsListItemType[]>) => {
      store.newsList = action.payload;
    },
    setNews: (store, action: PayloadAction<NewsState['currentNews']>) => {
      store.currentNews = action.payload;
    },
    updateComments: (store, action: PayloadAction<NewsItemType[]>) => {
      if (store.currentNews) {
        store.currentNews.comments = action.payload;
      }
    },
  },
});

export const { setNewsList, setNews, updateComments } = newsSlice.actions;

export const newsListSelector = (state: RootState) => state.news.newsList;
export const currentNewsSelector = (state: RootState) => state.news.currentNews;

export default newsSlice.reducer;
