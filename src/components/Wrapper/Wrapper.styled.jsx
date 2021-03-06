import styled from 'styled-components';

const WrapperStyled = styled.main`
  margin: ${({ filter }) => (filter ? '2em' : '-2em 2em')};
  @media screen and (min-width: 768px) {
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export default WrapperStyled;
