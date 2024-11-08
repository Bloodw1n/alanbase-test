import { RefObject } from 'react';
import { User } from '../../types';

export type SelectDropdownProps = {
  users: User[];
  highlightedIndex: number;
  selectedUser: User | null;
  loading: boolean;
  loadMoreUsers: () => void;
  handleUserSelect: (user: User) => void;
  dropdownRef: RefObject<HTMLDivElement>;
};
