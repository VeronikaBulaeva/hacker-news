import { FeedDataType, ItemDataType } from "@/components/types";

export const getAllNews = async (
  id: number,
): Promise<ItemDataType[] | null> => {
  const result = await fetch(`https://api.hnpwa.com/v0/newest/${id}.json`);
  try {
    return await result.json();
  } catch (e) {
    return null;
  }
};

export const getNews = async (id: number): Promise<FeedDataType> => {
  const result = await fetch(`https://api.hnpwa.com/v0/item/${id}.json`);
  return await result.json();
};