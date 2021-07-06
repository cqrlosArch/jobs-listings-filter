import styled from 'styled-components';

const FilterStyled = styled.section.attrs((props) => ({
  'aria-label': 'Filter',
}))`
  /* display: ${({ visible }) => (visible ? 'flex' : 'none')}; */
  opacity: ${({ visible }) => (visible ? '1' : '0')};
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  transform: ${({ visible }) => visible && ' translateY(-60px)'};
  transition: opacity 0.3s ease-in-out, visibility 0.5s ease-in-out;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 1em;
  min-height: 100px;
  border-radius: 5px;
  border-radius: 5px;
  box-shadow: 0px 10px 15px -1px var(--cyanShadow);
  position: relative;
  @media screen and (min-width: 768px) {
    min-height: 60px;
    height: 60px;
  }
`;

const ButtonStyled = styled.button`
  appearance: none;
  border: none;
  background-color: transparent;
  position: absolute;
  right: 2%;
  top: 50%;
  color: var(--cyanDark);
  font-family: 'Spartan', sans-serif;
  font-size: 0.7rem;
  font-weight: 700;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

export { FilterStyled, ButtonStyled };
