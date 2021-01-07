import Layout from '../components/Layout'
import styled from 'styled-components';

const StyledHeaderSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  margin-top: 10vh;
  margin-bottom: 10vh;
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

const StyledContentSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
`;

const CompanyOverlay = styled.div`
  transition: .5s ease;
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
  transition: background-color 140ms cubic-bezier(.33,0,.2,1);
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
  color: black;
  font-size: 40px;
  padding: 16px 32px;
`;

interface CompanyMetadata {
  linkUrl: string;
  imageUrl: string;
  company: string;
}

const companies: CompanyMetadata[] = [
  {
    linkUrl: '/amazon',
    imageUrl: '/images/Amazon.svg',
    company: 'Amazon',
  },
  {
    linkUrl: '/rigup',
    imageUrl: '/images/RigUp.svg',
    company: 'RigUp',
  },
  {
  linkUrl: '/microsoft',
  imageUrl: '/images/Microsoft.svg',
  company: 'Microsoft'
},
{
  linkUrl: '/postmates',
  imageUrl: '/images/Postmates.svg',
  company: 'Postmates',
},
{
  linkUrl: '/ibm',
  imageUrl: '/images/IBM.svg',
  company: 'IBM',
},
];

const IndexPage = () => {
  return (
  <Layout title="Juan Cortez">
      <StyledHeaderSection>
        <StyledNameHeader>Hi. I'm Juan Cortez.</StyledNameHeader>

        <StyledArticle>
          <StyledArticleText>Empathy towards end users has always been my greatest trait.</StyledArticleText>
          <StyledBlockQuote>"When people talk, listen completely. Most people never listen." - Ernest Hemingway</StyledBlockQuote>
        </StyledArticle>
      </StyledHeaderSection>

      <StyledContentSection>
        {companies.map((c: CompanyMetadata) => {
          return (
            <StyledCompanyArticle key={c.company}>
                <StyledCompanyLink href={c.linkUrl}>
                  <StyledFigure>
                    <StyledCompanyImage src={c.imageUrl}/>
                    <CompanyOverlay>
                      <StyledFigCaption>{c.company}</StyledFigCaption>
                    </CompanyOverlay>
                  </StyledFigure>
                </StyledCompanyLink>
            </StyledCompanyArticle>
          )
        })}
      </StyledContentSection>
    </Layout>
  )
}


export default IndexPage
