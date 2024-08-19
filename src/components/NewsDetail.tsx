import { Box, styled, Typography } from '@mui/material';
import { UpdateButton } from '@/components/style';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import dayjs from 'dayjs';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import CachedIcon from '@mui/icons-material/Cached';
import CommentList from '@/components/Comments/CommenList';
import { Link } from 'react-router-dom';
import { useAppSelector } from '@/store/hooks';
import { currentNewsSelector, loadingSelector } from '@/store/newsSlice';
import Loader from '@/components/Loader/Loader.tsx';

interface OneNewsType {
  onPressReload: () => void;
}

const NewsDetail = ({ onPressReload }: OneNewsType) => {
  const currentNews = useAppSelector(currentNewsSelector);
  const isLoading = useAppSelector(loadingSelector);

  const date = dayjs((currentNews?.time ?? 0) * 1000).format('DD.MM.YYYY в HH:mm');

  return (
    <>
      {isLoading && <Loader />}
      {currentNews && <NewsSection>
        <Typography variant="h1" color="text.primary">
          {currentNews.title}
        </Typography>
        <LinkText to={`${currentNews.url}`}>{currentNews.url}</LinkText>
        <Box display="flex" gap={1.5}>
          <PersonOutlinedIcon sx={{ fontSize: 40 }} />
          <Box display="grid" justifyContent="space-between">
            <Typography variant="h1" color="text.primary">
              {currentNews.user}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              {date}
            </Typography>
          </Box>
        </Box>
        <div dangerouslySetInnerHTML={{ __html: currentNews.content }} />
        <SocialBox>
          <Box display="flex" gap={1.5}>
            <ItemBox>
              <FavoriteBorderIcon sx={{ fontSize: 22, color: 'background.paper' }} />
              <Typography variant="subtitle1" color="text.primary">
                {currentNews.points}
              </Typography>
            </ItemBox>
            <ItemBox>
              <ChatBubbleOutlineIcon sx={{ fontSize: 22, color: 'background.paper' }} />
              <Typography variant="subtitle1" color="text.primary">
                {currentNews.comments_count}
              </Typography>
            </ItemBox>
          </Box>
          <UpdateButton component="button" onClick={onPressReload}>
            <CachedIcon sx={{ fontSize: 25, color: 'background.paper' }} />
          </UpdateButton>
        </SocialBox>
        <CommentList currentNews={currentNews} />
      </NewsSection>}
    </>

  );
};

const NewsSection = styled('section')`
    display: grid;
    gap: 20px;
    max-width: 50%;
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
    padding-block: 16px;
    border-block: #f0f0f0 solid 1px;
`;

const ItemBox = styled(Box)`
    display: flex;
    gap: 8px;
    border-radius: 10px;
    box-shadow: ${({ theme }) => theme.palette.shadows.greyShadow};
    align-items: center;
    padding: 10px;
    max-width: max-content;
`;

export default NewsDetail;
