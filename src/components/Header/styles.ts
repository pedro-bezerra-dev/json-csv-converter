import styled from 'styled-components';

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  border: 1px solid ${(props) => props.theme.colors.primary};
  padding: 24px 100px;

  > img {
    width: 48px;
    display: inline-block;
  }
  div {
    display: flex;
    align-items: center;
    gap: 15px;

    a {
      width: 36px;
      border-radius: 5px;

      display: flex;
      align-items: center;
      justify-content: center;
      padding: 5px;
      transition: 0.2s;

      &:hover {
        background: rgba(63, 132, 229, .3);
      }
    }
  }
`;
