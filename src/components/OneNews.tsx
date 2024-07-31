import { FC } from 'react';
import { styled, Typography } from '@mui/material';
import { FlexBox, GridBox, UpdateButton } from '@/components/style';
import User from '@/assets/user.svg';
import dayjs from 'dayjs';
import Like from '@/assets/likes.svg';
import Comment from '@/assets/comment.svg';
import Reload from '@/assets/reload.svg';
import CommentList from '@/components/Comments/CommenList';
import { Link } from 'react-router-dom';
import ButtonLink from '@/commons/Button';
import { useAppSelector } from '@/store/hooks';
import { currentNewsSelector } from '@/store/newsSlice';

const OneNews: FC = () => {
  const currentNews = useAppSelector(currentNewsSelector);

  if (!currentNews) {
    return null;
  }

  const date = dayjs(currentNews.time * 1000).format('DD.MM.YYYY в HH:mm');

  return (
    <NewsSection>
      <Typography variant="h1" color="text.primary">
        {currentNews.title}
      </Typography>
      <LinkText to={`${currentNews.url}`}>{currentNews.url}</LinkText>
      <FlexBox>
        <img src={User} alt={'user'} width={50} height={50} />
        <GridBox>
          <Typography variant="h1" color="text.primary">
            {currentNews.user}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            {date}
          </Typography>
        </GridBox>
      </FlexBox>
      <div dangerouslySetInnerHTML={{ __html: currentNews.content }} />
      <SocialBox>
        <FlexBox>
          <ItemBox>
            <img src={Like} alt={'like'} width={20} height={20} />
            <Typography variant="subtitle1" color="text.primary">
              {currentNews.points}
            </Typography>
          </ItemBox>
          <ItemBox>
            <img src={Comment} alt={'comment'} width={20} height={20} />
            <Typography variant="subtitle1" color="text.primary">
              {currentNews.comments_count}
            </Typography>
          </ItemBox>
        </FlexBox>
        <UpdateButton component="button" onClick={() => window.location.reload()}>
          <img src={Reload} alt={'back'} width={20} height={20} />
        </UpdateButton>
      </SocialBox>
      <CommentList currentNews={currentNews} />
    </NewsSection>
  );
};

const NewsSection = styled('section')`
  display: grid;
  gap: 20px;
  max-width: 70%;
  margin-inline: auto;
  margin-block: 40px;

  ${({ theme }) => theme.breakpoints.down('md')} {
    max-width: none;
    margin-inline: 50px;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    margin-inline: 20px;
  }
`;

const LinkText = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.palette.text.secondary};
  transition: all 0.3s;

  &:hover {
    color: ${({ theme }) => theme.palette.text.primary};
  }
`;

const SocialBox = styled('div')`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  padding: 16px 0;
  border-block: #f0f0f0 solid 1px;
`;

const ItemBox = styled(ButtonLink)`
  gap: 8px;
  align-items: center;
  padding: 10px;
  max-width: max-content;
  cursor: pointer;
  border: transparent solid 1px;

  &:hover {
    background-color: ${({ theme }) => theme.palette.secondary.main}
    border: ${({ theme }) => theme.palette.primary.main} solid 1px;
  }
`;

export default OneNews;
