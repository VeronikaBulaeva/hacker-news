import { FC } from 'react';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import { useNavigate } from 'react-router';
import ButtonLink from '@/commons/Button';
import { styled, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Header: FC = () => {
  const navigate = useNavigate();
  return (
    <HeaderSection sx={{ '&&': { padding: 3 } }}>
      <HeaderLink component={Link} to="/newsList/1">
        <Typography variant="h1" color="text.primary">
          Hacker News
        </Typography>
      </HeaderLink>
      <HeaderButton onClick={() => navigate(-1)}>
        <ArrowBackIosNewRoundedIcon sx={{ fontSize: 30, color: 'background.paper' }} />
        <Typography variant="h1" color="text.primary">
          Назад
        </Typography>
      </HeaderButton>
    </HeaderSection>
  );
};

const HeaderSection = styled('section')`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.palette.secondary.main};
  margin-inline: auto;
`;

const HeaderLink = styled(ButtonLink)`
  margin-top: 16px;
  padding: 16px 20px;
  align-items: center;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    padding: 10px;
  }
`;

export const HeaderButton = styled(HeaderLink)`
  ${({ theme }) => theme.breakpoints.down('sm')} {
    padding: 6px;
    gap: 4px;
  }
`;

export default Header;
