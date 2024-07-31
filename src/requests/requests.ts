import { NewsItemType, NewsListItemType } from '@/components/types';

export const getAllNews = async (id: number): Promise<NewsListItemType[]> => {
  const result = await fetch(`https://api.hnpwa.com/v0/newest/${id}.json`);
  return await result.json();
};

export const getNews = async (id: number): Promise<NewsItemType> => {
  const result = await fetch(`https://api.hnpwa.com/v0/item/${id}.json`);
  return await result.json();
};
