import Layout from '../components/Layout';
import CompanyShell from '../components/CompanyShell';

import { CompanyMetadata } from './../interfaces';
import fetchCompanyData from './../lib/db/company-request';

interface StaticProps {
  companyMetadata: CompanyMetadata;
}

const AmazonPage = ({ companyMetadata }: StaticProps) => {
  return (
    <Layout title="Amazon">
      <CompanyShell companyMetadata={companyMetadata} />
    </Layout>
  );
};

export async function getStaticProps(): Promise<{ props: StaticProps }> {
  const companyMetadata: CompanyMetadata = await fetchCompanyData('Amazon');

  return {
    props: {
      companyMetadata,
    },
  };
}

export default AmazonPage;
