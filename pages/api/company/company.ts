import { NextApiRequest, NextApiResponse } from 'next'
import { CompanyMetadata } from '../../../interfaces';

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

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    res.status(200).json(companies)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
