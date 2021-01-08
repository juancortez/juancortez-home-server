import Layout from '../components/Layout';

import CompanyShell from '../components/CompanyShell';

const RigUpPage = () => {
  return (
    <Layout title="RigUp">
      <CompanyShell
        companyMetadata={{
          linkUrl: '/rigup',
          imageUrl: '/images/RigUp.svg',
          company: 'RigUp',
          position: 'Staff Software Engineer',
          startYear: '2019',
          endYear: '2021',
        }}
      />
    </Layout>
  );
};

export default RigUpPage;
