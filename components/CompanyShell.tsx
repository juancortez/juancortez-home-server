import React from 'react';

import styled from 'styled-components';
import { CompanyMetadata } from './../interfaces';

const CompanyHeaderContainer = styled.header`
  text-align: center;
  margin-bottom: 10vh;
`;

const CompanyHeader = styled.h1`
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

type Props = {
  companyMetadata: CompanyMetadata;
};

const CompanyShellPage = ({ companyMetadata }: Props) => {
  const { company, position, startYear, endYear } = companyMetadata;
  return (
    <CompanyHeaderContainer>
      <CompanyHeader>{company}</CompanyHeader>
      <h2>{position}</h2>
      <h3>
        {startYear}-{endYear}
      </h3>
    </CompanyHeaderContainer>
  );
};

export default CompanyShellPage;
