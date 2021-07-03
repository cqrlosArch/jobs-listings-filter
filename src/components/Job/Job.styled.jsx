import styled from 'styled-components';

const JobStyled = styled.article`
  background-color: var(--white);
  border-left: ${({ featured }) => featured && '6px solid var(--cyan)'};
  border-radius: 5px;
  min-height: 250px;
  position: relative;
  padding: 1.5em;
  margin-bottom: 2.5em;
  box-shadow: 0px 10px 15px -1px var(--cyanShadow);

  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1em;
  }
`;

const JobImg = styled.img.attrs((props) => ({
  src: props.logo,
}))`
  width: 100%;
  max-width: 50px;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(50%, -50%);
`;
const JobTitle = styled.h2`
  font-size: 1rem;
  font-weight: 900;
  margin: 1.3rem 0;
`;
const JobCompany = styled.h1`
  font-size: 0.8rem;
  color: var(--cyan);
`;

const JobLabelNew = styled.span`
  background-color: var(--cyan);
  color: var(--white);
  padding: 0.2em 1em;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 2;
`;
const JobLabelFeatured = styled(JobLabelNew)`
  background-color: var(--cyanVeryDark);
`;

const JobInfo = styled.p`
  color: var(--cyanDark);
  font-size: 0.8rem;
  border-bottom: 1px solid var(--cyanDark);
  padding-bottom: 2em;
`;
const JobTags = styled.div`
  text-align: left;
`;

export {
  JobStyled,
  JobTitle,
  JobCompany,
  JobImg,
  JobInfo,
  JobTags,
  JobLabelNew,
  JobLabelFeatured,
};
