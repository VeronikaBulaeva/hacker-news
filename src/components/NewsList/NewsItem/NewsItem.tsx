import { FC } from "react";
import { ItemDataType } from "@/components/types";
import { Box, FirstText, NewsItemLink, SecondText } from "@/components/style";

const NewsItem: FC<ItemDataType> = ({
  title,
  user,
  time_ago,
  id,
  points,
  comments_count,
}) => {
  return (
    <NewsItemLink to={`/news/${id}`}>
      <FirstText>{title}</FirstText>
      <FirstText>Автор: {user}</FirstText>
      <Box>
        <SecondText>{time_ago}</SecondText>
        <SecondText>Нравится: {points}</SecondText>
        <SecondText>Комментариев: {comments_count}</SecondText>
      </Box>
    </NewsItemLink>
  );
};

export default NewsItem;