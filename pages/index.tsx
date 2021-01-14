import Layout from '../components/Layout';
import executeQuery from '../lib/db/db';

import {
  StyledHeaderSection,
  StyledArticle,
  StyledNameHeader,
  StyledArticleText,
  StyledBlockQuote,
  StyledWorkContentSection,
  StyledContentSection,
  CompanyOverlay,
  StyledCompanyImage,
  StyledCompanyArticle,
  StyledFigure,
  StyledCompanyLink,
  StyledFigCaption,
  StyledWorkExperienceHeader,
  CenterAlignDiv,
  StyledProfilePicture,
} from '../styles/index.styles';
import { CompanyMetadata } from './../interfaces';

interface DBCompanyData {
  link_url: string;
  image_url: string;
  company_name: string;
  start_year: number;
  end_year: number;
  position: string;
}

interface StaticProps {
  companies: CompanyMetadata[];
}

const PRESENT_IDENTIFIER = 9999;

const IndexPage = ({ companies }: StaticProps) => {
  return (
    <Layout title="Juan Cortez">
      <StyledHeaderSection>
        <StyledNameHeader>Hi. I'm Juan Cortez.</StyledNameHeader>

        <StyledProfilePicture src="/images/Juan.jpeg"></StyledProfilePicture>

        <StyledArticle>
          <StyledArticleText>Empathy for customers has always been my greatest trait.</StyledArticleText>
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
                      <span>{c.startYear}</span> - <span>{c.endYear === PRESENT_IDENTIFIER ? 'Present' : c.endYear}</span>
                    </CompanyOverlay>
                  </StyledFigure>
                </StyledCompanyLink>
              </StyledCompanyArticle>
            );
          })}
        </StyledContentSection>
      </StyledWorkContentSection>

      {/* <StyledDivider />
      <StyledWorkContentSection>
        <CenterAlignDiv>
          <StyledWorkExperienceHeader>Featured Work</StyledWorkExperienceHeader>
        </CenterAlignDiv>

        <StyledContentSection>
          <article>
            <img src="/assets/NuCamp.svg" />
            <div>
              <h5>NuCamp</h5>
              <p>A description</p>
            </div>
          </article>
        </StyledContentSection>
      </StyledWorkContentSection> */}
    </Layout>
  );
};

export async function getStaticProps(): Promise<{ props: StaticProps }> {
  const results = await executeQuery<DBCompanyData[]>({
    query: 'SELECT * from WORK_EXPERIENCE ORDER BY end_year DESC',
  });

  const serializedData: CompanyMetadata[] = results.map((d) => {
    const { link_url: linkUrl, image_url: imageUrl, company_name: company, start_year: startYear, end_year: endYear, position: position } = d;
    return {
      linkUrl,
      imageUrl,
      company,
      startYear,
      endYear,
      position,
    };
  });

  return {
    props: {
      companies: serializedData,
    },
  };
}

export default IndexPage;
