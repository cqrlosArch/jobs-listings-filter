import styled from 'styled-components';

const FilterStyled = styled.section.attrs((props) => ({
  'aria-label': 'Filter',
}))`
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  flex-wrap: wrap;
  background-color: #fff;
  padding: 1em;
  min-height: 100px;
  border-radius: 5px;
  border-radius: 5px;
  transform: translateY(-60px);
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
  right: 0;
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
