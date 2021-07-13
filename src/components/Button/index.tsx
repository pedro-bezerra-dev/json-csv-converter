import { ButtonHTMLAttributes, ReactNode } from 'react';

import { ButtonStyled } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
  props?: any;
}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <ButtonStyled {...props}>
      {children}
    </ButtonStyled>
  );
}
