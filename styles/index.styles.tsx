import styled from 'styled-components';

export const StyledHeaderSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  padding-top: 5vh;
  padding-bottom: 5vh;

  background: url('images/Circuit_Board.svg');
`;

const StyledPlainCircuitBoardUrl = "url('images/White_Circuit_Board.svg')";
const TextShadowTextStyle = '2px 2px #164a41;';

export const StyledArticle = styled.article`
  max-width: 67vw;
  background: ${StyledPlainCircuitBoardUrl};
  text-shadow: ${TextShadowTextStyle};
`;

export const StyledNameHeader = styled.h1`
  font-size: 42px;
  font-weight: bold;
  color: white;
  background: ${StyledPlainCircuitBoardUrl};
  text-shadow: ${TextShadowTextStyle};
`;

export const StyledArticleText = styled.h2`
  font-size: 36px;
  font-weight: bold;
  color: white;
  text-shadow: ${TextShadowTextStyle};
`;

export const StyledBlockQuote = styled.blockquote`
  font-style: italic;
  color: white;
  text-shadow: ${TextShadowTextStyle};
`;

export const StyledWorkContentSection = styled.section`
  margin-bottom: 10vh;
`;

export const StyledContentSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
`;

export const CompanyOverlay = styled.div`
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
`;

export const StyledCompanyImage = styled.img`
  max-height: 500px;
  max-width: 300px;
`;

export const StyledCompanyArticle = styled.article`
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

export const StyledFigure = styled.figure`
  flex-direction: column;
  align-items: center;
  margin: 0px;
  text-align: center;
  display: flex;
  justify-content: center;
  height: 100%;
  color: #111;
`;

export const StyledCompanyLink = styled.a`
  text-decoration: none;
`;

export const StyledFigCaption = styled.figcaption`
  color: #164a41;
  font-size: 40px;
  padding: 16px 32px;
`;

export const StyledWorkExperienceHeader = styled.h2`
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
    background: #164a41;
    position: absolute;
    left: calc(50% - 15%);
    bottom: -20px;
  }
`;

export const CenterAlignDiv = styled.header`
  text-align: center;
`;

export const StyledProfilePicture = styled.img`
  width: 250px;
  vertical-align: middle;
  border-radius: 50%;
  border: 3px solid #f1b24a;
`;

export const StyledDivider = styled.hr`
  border-color: rgba(0, 0, 0, 0.08);
  margin: 1rem 2rem;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;
