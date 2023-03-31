export interface WorkExperienceInterface {
  job: string;
  company: {name: string; website: string};
  startDate: string;
  finishDate: string;
  location: string;
  duties: string[];
}
