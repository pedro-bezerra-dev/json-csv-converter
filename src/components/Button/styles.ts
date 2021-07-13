import styled from 'styled-components';

export const ButtonStyled = styled.button`
  background: ${(props) => props.theme.colors.primary};
  border: none;
  border-radius: 15px;
  padding: 10px 20px;
  color: #fff;
  cursor: pointer;
  transition: .2s;

  &:hover {
    filter: brightness(0.8);
  }
`;
