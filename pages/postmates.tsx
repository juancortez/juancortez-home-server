import Layout from '../components/Layout';
import CompanyShell from '../components/CompanyShell';

import { CompanyMetadata } from './../interfaces';
import fetchCompanyData from './../lib/db/company-request';

interface StaticProps {
  companyMetadata: CompanyMetadata;
}

const PostmatesPage = ({ companyMetadata }: StaticProps) => {
  return (
    <Layout title="Postmates">
      <CompanyShell companyMetadata={companyMetadata} />
    </Layout>
  );
};

export async function getStaticProps(): Promise<{ props: StaticProps }> {
  const companyMetadata: CompanyMetadata = await fetchCompanyData('Postmates');

  return {
    props: {
      companyMetadata,
    },
  };
}

export default PostmatesPage;
