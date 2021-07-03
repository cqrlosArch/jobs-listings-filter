import { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import Job from '../Job';
import ListStyled from './List.styled';

function List() {
  const { jobsFilter } = useContext(AppContext);
  return (
    <ListStyled>
      {jobsFilter?.map((job) => (
        <Job key={job.id} job={job} />
      ))}
    </ListStyled>
  );
}

export default List;
