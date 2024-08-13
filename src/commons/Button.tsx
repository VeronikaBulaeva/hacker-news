import { PropsWithChildren } from 'react';
import { Button as MUIButton, ButtonProps, styled } from '@mui/material';
import { Link, LinkProps } from 'react-router-dom';

const ButtonLink = ({ children, ...rest }: PropsWithChildren<ButtonProps & Partial<LinkProps>>) => {
  return (
    <Button component={rest.component ?? Link} color={rest.color ?? 'info'} {...rest}>
      {children}
    </Button>
  );
};

const Button = styled(MUIButton)<ButtonProps>`
    display: flex;
    gap: 20px;
    border: transparent solid 1px;
    border-radius: 10px;
    box-shadow: ${({ theme }) => theme.palette.shadow.shadow};
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s;
    margin: 0;
    text-transform: none;

    &:hover {
        background-color: ${({ theme }) => theme.palette.secondary.light};
        border: ${({ theme }) => theme.palette.primary.main} solid 1px;
    }
`;

export default ButtonLink;
