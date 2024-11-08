import { User } from '../../types';

export type SelectItemProps = {
  user: User;
  isSelected: boolean;
  isHighlighted: boolean;
  onClick: () => void;
};
