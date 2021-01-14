import executeQuery from './db';

import { CompanyMetadata } from './../../interfaces';

interface DBCompanyData {
  link_url: string;
  image_url: string;
  company_name: string;
  start_year: number;
  end_year: number;
  position: string;
}

type Company = 'Amazon' | 'RigUp' | 'Postmates' | 'Microsoft' | 'IBM';

const fetchCompanyData = async (companyName: Company): Promise<CompanyMetadata> => {
  const [results] = await executeQuery<[DBCompanyData]>({
    query: `SELECT * from WORK_EXPERIENCE where company_name="${companyName}"`,
  });

  const { link_url: linkUrl, image_url: imageUrl, company_name: company, start_year: startYear, end_year: endYear, position: position } = results;

  return {
    linkUrl,
    imageUrl,
    company,
    startYear,
    endYear,
    position,
  };
};

export default fetchCompanyData;
