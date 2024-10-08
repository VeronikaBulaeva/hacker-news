import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';
import { NewsItemType, NewsListItemType } from '@/components/types';

export interface NewsState {
  newsList: NewsListItemType[];
  currentNews: NewsItemType | null;
  loading: boolean;
  isCommentsFetching: boolean;
}

const initialState: NewsState = {
  newsList: [],
  currentNews: null,
  loading: false,
  isCommentsFetching: false,
};

export const getAllNews = createAsyncThunk(
  'setNewsList',
  async (id: number, { rejectWithValue }): Promise<NewsListItemType[] | undefined> => {
    const result = await fetch(`https://api.hnpwa.com/v0/newest/${id}.json`);
    if (result) {
      return await result.json();
    }
    rejectWithValue('');
  },
);

export const getNewsDetail = createAsyncThunk(
  'getNewsDetail',
  async (id: number, { rejectWithValue }): Promise<NewsItemType | undefined> => {
    const result = await fetch(`https://api.hnpwa.com/v0/item/${id}.json`);
    if (result) {
      return await result.json();
    }
    rejectWithValue('');
  },
);

export const getComments = createAsyncThunk(
  'getComments',
  async (id: number, { rejectWithValue }): Promise<NewsItemType['comments'] | undefined> => {
    const result = await fetch(`https://api.hnpwa.com/v0/item/${id}.json`);
    if (result) {
      const newsDetail: NewsItemType = await result.json();
      return newsDetail.comments;
    }
    rejectWithValue('');
  },
);


export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllNews.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllNews.fulfilled, (state, action) => {
        if (action.payload) {
          state.newsList = action.payload;
        }
        state.loading = false;
      })
      .addCase(getAllNews.rejected, (state, action) => {
        state.loading = false;
        throw action.error;
      })
      .addCase(getNewsDetail.pending, (state) => {
        state.loading = true;
      })
      .addCase(getNewsDetail.fulfilled, (state, action) => {
        if (action.payload) {
          state.currentNews = action.payload;
        }
        state.loading = false;
      })
      .addCase(getNewsDetail.rejected, (state, action) => {
        state.loading = false;
        throw action.error;
      }).addCase(getComments.pending, (state) => {
      state.isCommentsFetching = true;
    })
      .addCase(getComments.fulfilled, (state, action) => {
        if (action.payload && state.currentNews) {
          state.currentNews.comments = action.payload;
        }
        state.isCommentsFetching = false;
      })
      .addCase(getComments.rejected, (state, action) => {
        state.isCommentsFetching = false;
        throw action.error;
      });
  },
});

export const newsListSelector = (state: RootState) => state.news.newsList;
export const currentNewsSelector = (state: RootState) => state.news.currentNews;

export const loadingSelector = (state: RootState) => state.news.loading;
export const isCommentsFetchingSelector = (state: RootState) => state.news.isCommentsFetching;

export default newsSlice.reducer;
