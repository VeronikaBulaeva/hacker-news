import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import { useNavigate } from 'react-router';
import ButtonLink from '@/commons/Button';
import { styled, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { MAIN_PAGE_ROUTE } from '@/constants/routes.ts';

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderSection sx={{ '&&': { padding: 3 } }}>
      <HeaderLink component={Link} to={MAIN_PAGE_ROUTE}>
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
`;

const HeaderLink = styled(ButtonLink)`
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
