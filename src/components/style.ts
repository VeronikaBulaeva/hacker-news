import { styled } from '@mui/material';
import ButtonLink from '@/commons/Button';

export const UpdateButton = styled(ButtonLink)`
  justify-self: flex-end;
  max-width: max-content;
  padding: 10px;
`;

export const GridBox = styled('div')`
  display: grid;
  gap: 8px;
  justify-content: space-between;
`;

export const FlexBox = styled('div')`
  display: flex;
  gap: 10px;
`;

export const MainSection = styled('section')`
  display: grid;
  margin: 10px 32px;
`;
