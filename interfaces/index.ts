export type User = {
  id: number
  name: string
}

export interface CompanyMetadata {
  linkUrl: string;
  imageUrl: string;
  company: string;
  position: string;
  startYear: number;
  endYear: number;
}