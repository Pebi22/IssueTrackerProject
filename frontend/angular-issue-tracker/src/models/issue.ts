import { Comment } from './comment';

export class Issue {
  id?: any;
  title?: string;
  body?: string;
  votes?: number;
  comments?: Comment[];
  created?: Date;
}
