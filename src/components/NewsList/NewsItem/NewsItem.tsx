import { NewsListItemType } from '@/components/types';
import { styled, Typography } from '@mui/material';
import ButtonLink from '@/commons/Button';

const NewsItem = ({ title, user, time_ago, id, points, comments_count }: NewsListItemType) => {
  return (
    <NewsItemLink to={`/news/${id}`}>
      <Typography variant="h1" color="text.primary">
        {title}
      </Typography>
      <Typography variant="h1" color="text.primary">
        Автор: {user}
      </Typography>
      <Box>
        <Typography variant="subtitle2" color="text.secondary">
          {time_ago}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          Нравится: {points}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          Комментариев: {comments_count}
        </Typography>
      </Box>
    </NewsItemLink>
  );
};

const NewsItemLink = styled(ButtonLink)`
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 30px;
  margin-top: 16px;
  padding: 16px 20px;

  &:hover {
    transform: scale(1.05);
  }
`;

const Box = styled('div')`
  display: flex;
  gap: 30px;
  justify-content: space-between;
  text-align: center;
`;

export default NewsItem;
