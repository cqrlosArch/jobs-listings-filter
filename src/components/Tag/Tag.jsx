import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import TagStyled from './Tag.styled';

function Tag({ tag, filter }) {
  const { getTags, removeTag } = useContext(AppContext);

  const handleClick = () => {
    if (!filter) {
      getTags(tag);
    }

    if (filter) {
      removeTag(tag);
    }
  };

  return (
    <TagStyled onClick={handleClick} filter={filter}>
      {tag}
    </TagStyled>
  );
}

export default Tag;
