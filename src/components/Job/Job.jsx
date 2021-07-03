import Tag from '../Tag';
import { nanoid } from 'nanoid';
import {
  JobStyled,
  JobTitle,
  JobCompany,
  JobImg,
  JobInfo,
  JobTags,
  JobLabelNew,
  JobLabelFeatured,
} from './Job.styled';

function Job(props) {
  const {
    position,
    company,
    featured,
    logo,
    postedAt,
    contract,
    location,
    tags,
  } = props.job;

  return (
    <JobStyled featured={featured}>
      <JobImg logo={logo} company={company} />
      <div className="container">
        <JobCompany>{company}</JobCompany>
        {props.job.new && <JobLabelNew>New!</JobLabelNew>}
        {props.job.featured && <JobLabelFeatured>Featured</JobLabelFeatured>}
      </div>

      <JobTitle>{position}</JobTitle>

      <JobInfo>{`${postedAt} · ${contract} · ${location}`}</JobInfo>
      <JobTags>
        {tags?.map((tag) => (
          <Tag key={nanoid(5)} tag={tag} />
        ))}
      </JobTags>
    </JobStyled>
  );
}

export default Job;
