import { ReactNode } from 'react';
import { HeaderStyled } from './styles';

type HeaderProps = {
  children: ReactNode
}

export function Header({ children }: HeaderProps) {
  return (
    <HeaderStyled>
      {children}
    </HeaderStyled>
  );
}
