import { FC, useState } from 'react';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import { Box, styled, Typography } from '@mui/material';
import ButtonLink from '@/commons/Button';
import { CommentType } from '@/components/Comments/Comments.type';

const Comments: FC<CommentType> = ({ content, comments, user, time_ago }) => {
  const [isShown, setIsShown] = useState(false);

  const changeVisibility = () => {
    setIsShown(!isShown);
  };

  return (
    <CommentBox>
      <Box display="flex" gap={1.5}>
        <PersonOutlinedIcon sx={{ fontSize: 40 }} />
        <Box display="grid" justifyContent="space-between">
          <Typography variant="subtitle1" color="text.primary">
            {user}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            {time_ago}
          </Typography>
        </Box>
      </Box>

      <div dangerouslySetInnerHTML={{ __html: content }} />
      {!!comments.length && (
        <CommentButton component="button" onClick={changeVisibility}>
          <Typography variant="subtitle2" color="text.secondary">
            {isShown ? 'Скрыть ответы' : 'Показать ответы'}
          </Typography>
        </CommentButton>
      )}
      {isShown &&
        comments
          .filter((comment) => !comment.deleted || !comment.dead)
          .map((comment) => <Comments {...comment} key={comment.id} />)}
    </CommentBox>
  );
};

const CommentBox = styled('div')`
  display: grid;
  gap: 10px;
  background-color: ${({ theme }) => theme.palette.background.default};
  border-radius: 10px;
  padding: 16px 20px;
  margin-top: 16px;
  box-shadow: ${({ theme }) => theme.palette.shadow.shadow};
  text-decoration: none;
`;

export const CommentButton = styled(ButtonLink)`
  color: ${({ theme }) => theme.palette.text.secondary};
  align-items: center;
  justify-content: center;
  text-decoration: none;
  margin-top: 16px;
  padding: 16px 20px;
`;

export default Comments;
