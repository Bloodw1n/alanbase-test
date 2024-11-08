import { User } from '../types';

export type ApiResponse = {
  data: User[];
  meta: {
    from: number;
    to: number;
    total: number;
  };
};
