import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import Tag from '../Tag';
import { FilterStyled, ButtonStyled } from './Filter.styled';
import { nanoid } from 'nanoid';

function Filter() {
  const { tags, filterActive, clearTags } = useContext(AppContext);
  return (
    <FilterStyled visible={filterActive}>
      {tags.map((tag) => (
        <Tag key={nanoid(5)} tag={tag} filter="hasFilter" />
      ))}
      <ButtonStyled onClick={clearTags}>Clear</ButtonStyled>
    </FilterStyled>
  );
}

export default Filter;
