import styled, { css } from 'styled-components';

const TagStyled = styled.span`
  display: inline-block;
  margin-right: 1.5em;
  margin-bottom: 1em;
  text-align: ${({ filter }) => (filter ? 'left' : 'center')};
  background-color: var(--cyanBg);
  color: var(--cyan);
  font-size: 0.8rem;
  font-weight: 700;
  padding: ${({ filter }) => (filter ? '.5em 3em .5em .5em' : '0.5em .8em')};
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  height: 30px;
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }

  &:hover {
    color: ${({ filter }) => !filter && 'var(--white)'};
    background-color: ${({ filter }) => !filter && 'var(--cyan)'};
  }
  ${({ filter }) =>
    filter === 'hasFilter' &&
    css`
      &::after {
        content: 'X';
        background-color: var(--cyan);
        position: absolute;
        width: 30px;
        height: 30px;
        top: 0;
        right: 0;
        color: var(--white);
        display: flex;
        justify-content: center;
        align-items: center;
      }
      &:hover::after {
        background-color: ${({ filter }) => filter && 'var(--cyanVeryDark)'};
      }
    `}
`;

export default TagStyled;
