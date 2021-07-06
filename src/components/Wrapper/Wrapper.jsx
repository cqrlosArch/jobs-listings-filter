import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import WrapperStyled from './Wrapper.styled';

function Wrapper({ children }) {
  const { filterActive } = useContext(AppContext);
  return <WrapperStyled filter={filterActive}>{children}</WrapperStyled>;
}

export default Wrapper;
