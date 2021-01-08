import Layout from '../components/Layout';
import styled from 'styled-components';

import { CompanyMetadata } from './../interfaces';

const StyledHeaderSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  margin-top: 5vh;
  margin-bottom: 5vh;
`;

const StyledArticle = styled.article`
  max-width: 67vw;
`;

const StyledNameHeader = styled.h1`
  font-size: 42px;
  font-weight: bold;
`;

const StyledArticleText = styled.h2`
  font-size: 36px;
  font-weight: bold;
`;

const StyledBlockQuote = styled.blockquote`
  font-style: italic;
`;

const StyledWorkContentSection = styled.section`
  margin-bottom: 10vh;
`;

const StyledContentSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
`;

const CompanyOverlay = styled.div`
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
`;

const StyledCompanyImage = styled.img`
  max-height: 500px;
  max-width: 300px;
`;

const StyledCompanyArticle = styled.article`
  opacity: 1;
  position: relative;
  min-width: 450px;
  max-width: 500px;
  margin: auto;
  transition: background-color 140ms cubic-bezier(0.33, 0, 0.2, 1);
  padding: 16px;

  &:hover ${StyledCompanyImage} {
    opacity: 0.1;
  }

  &:hover ${CompanyOverlay} {
    opacity: 1;
  }
`;

const StyledFigure = styled.figure`
  flex-direction: column;
  align-items: center;
  margin: 0px;
  text-align: center;
  display: flex;
  justify-content: center;
  height: 100%;
  color: #111;
`;

const StyledCompanyLink = styled.a`
  text-decoration: none;
`;

const StyledFigCaption = styled.figcaption`
  color: #164a41;
  font-size: 40px;
  padding: 16px 32px;
`;

const StyledWorkExperienceHeader = styled.h2`
  position: relative;
  line-height: 1.2em;
  text-align: center;
  font-size: 42px;
  display: inline-block;

  :before {
    position: absolute;
    content: '';
    height: 4px;
    width: 25%;
    background: #164A41;
    position: absolute;
    left: calc(50% - 15%);
    bottom: -20px;
`;

const CenterAlignDiv = styled.header`
  text-align: center;
`;

const StyledProfilePicture = styled.img`
  width: 250px;
  vertical-align: middle;
  border-radius: 50%;
  border: 3px solid #f1b24a;
`;

const companies: CompanyMetadata[] = [
  {
    linkUrl: '/amazon',
    imageUrl: '/images/Amazon.svg',
    company: 'Amazon',
    position: 'Front End Engineer 2',
    startYear: '2021',
    endYear: 'Present',
  },
  {
    linkUrl: '/rigup',
    imageUrl: '/images/RigUp.svg',
    company: 'RigUp',
    position: 'Staff Software Engineer',
    startYear: '2019',
    endYear: '2021',
  },
  {
    linkUrl: '/postmates',
    imageUrl: '/images/Postmates.svg',
    company: 'Postmates',
    position: 'Software Engineer',
    startYear: '2019',
    endYear: '2019',
  },
  {
    linkUrl: '/microsoft',
    imageUrl: '/images/Microsoft.svg',
    company: 'Microsoft',
    position: 'Software Engineer 2',
    startYear: '2017',
    endYear: '2019',
  },
  {
    linkUrl: '/ibm',
    imageUrl: '/images/IBM.svg',
    company: 'IBM',
    position: 'Staff Software Engineer',
    startYear: '2015',
    endYear: '2017',
  },
];

const IndexPage = () => {
  return (
    <Layout title="Juan Cortez">
      <StyledHeaderSection>
        <StyledNameHeader>Hi. I'm Juan Cortez.</StyledNameHeader>

        <StyledProfilePicture src="/images/Juan.jpeg"></StyledProfilePicture>

        <StyledArticle>
          <StyledArticleText>Empathy towards end users has always been my greatest trait.</StyledArticleText>
          <StyledBlockQuote>"When people talk, listen completely. Most people never listen." - Ernest Hemingway</StyledBlockQuote>
        </StyledArticle>
      </StyledHeaderSection>

      <StyledWorkContentSection>
        <CenterAlignDiv>
          <StyledWorkExperienceHeader>Work Experience</StyledWorkExperienceHeader>
        </CenterAlignDiv>
        <StyledContentSection>
          {companies.map((c: CompanyMetadata) => {
            return (
              <StyledCompanyArticle key={c.company}>
                <StyledCompanyLink href={c.linkUrl}>
                  <StyledFigure>
                    <StyledCompanyImage src={c.imageUrl} />
                    <CompanyOverlay>
                      <StyledFigCaption>{c.company}</StyledFigCaption>
                      <span>{c.position}</span>
                      <br />
                      <span>{c.startYear}</span> -<span>{c.endYear}</span>
                    </CompanyOverlay>
                  </StyledFigure>
                </StyledCompanyLink>
              </StyledCompanyArticle>
            );
          })}
        </StyledContentSection>
      </StyledWorkContentSection>
    </Layout>
  );
};

export default IndexPage;
