import styled from 'styled-components';

const HeaderStyled = styled.header`
  height: 150px;
  background: var(--cyan) url('./images/bg-header-mobile.svg') no-repeat;
  background-size: cover;
  @media screen and (min-width: 768px) {
    background: var(--cyan) url('./images/bg-header-desktop.svg') no-repeat;
  }
`;

export default HeaderStyled;
