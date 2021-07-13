import styled from 'styled-components';

export const FooterStyled = styled.footer`
  background: #313131;
  padding: 15px 0;
  color: #fff;
  font: 700 16px 'Roboto', sans-serif;

  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  a {
    color: #fff;
    text-decoration: none;
    transition: .2s;

    &:hover {
      color: ${(props) => props.theme.colors.secondary}
    }
  }
`;
