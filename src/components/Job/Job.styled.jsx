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

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 120px 300px auto;
    grid-template-rows: repeat(3, 40px);
    min-height: auto;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1em;
  }
`;

const JobImg = styled.img.attrs((props) => ({
  src: props.logo,
  alt: props.company,
}))`
  width: 100%;
  max-width: 50px;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(50%, -50%);
  @media screen and (min-width: 768px) {
    position: relative;
    max-width: 80px;
    grid-row: 1/-1;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
const JobTitle = styled.h3`
  font-size: 1rem;
  font-weight: 900;
  margin: 1.3rem 0;
  &:hover {
    color: var(--cyan);
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    grid-column: 2/3;
    margin: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;
const JobCompany = styled.h2`
  font-size: 0.8rem;
  color: var(--cyan);
  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
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
  @media screen and (min-width: 768px) {
    grid-row: 3/-1;
    border-bottom: none;
  }
`;
const JobTags = styled.div`
  text-align: left;

  @media screen and (min-width: 768px) {
    grid-column: 3/-1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
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
