import executeQuery from '../lib/db';

import Layout from '../components/Layout';
import CompanyShell from '../components/CompanyShell';

import { CompanyMetadata } from './../interfaces';

interface StaticProps {
  companyMetadata: CompanyMetadata;
}

const RigUpPage = ({ companyMetadata }: StaticProps) => {
  return (
    <Layout title="RigUp">
      <CompanyShell companyMetadata={companyMetadata} />
    </Layout>
  );
};

interface DBCompanyData {
  link_url: string;
  image_url: string;
  company_name: string;
  start_year: number;
  end_year: number;
  position: string;
}

export async function getStaticProps(): Promise<{ props: StaticProps }> {
  const [results] = await executeQuery<[DBCompanyData]>({
    query: 'SELECT * from WORK_EXPERIENCE where company_name="RigUp"',
  });

  const { link_url: linkUrl, image_url: imageUrl, company_name: company, start_year: startYear, end_year: endYear, position: position } = results;

  return {
    props: {
      companyMetadata: {
        linkUrl,
        imageUrl,
        company,
        startYear,
        endYear,
        position,
      },
    },
  };
}

export default RigUpPage;
