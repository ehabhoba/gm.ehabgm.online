
export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  features: string[];
  keywords: string[];
}

export interface City {
  id: string;
  name: string;
  governorate: string;
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  content: string;
  date: string;
  category: string;
  image: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
