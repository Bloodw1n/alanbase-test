import { FC, UIEvent } from 'react';
import { SelectItem } from '../SelectItem';
import styles from '@components/Select/Select.module.scss';
import { SelectDropdownProps } from './types';
import { useVirtualizedList } from '../../hooks/useVirtualizedList';

const ITEM_HEIGHT = 32;
const CONTAINER_HEIGHT = 168;

const SelectDropdown: FC<SelectDropdownProps> = ({
  users,
  highlightedIndex,
  selectedUser,
  loading,
  loadMoreUsers,
  handleUserSelect,
  dropdownRef,
}) => {
  const { visibleItems, onScroll, start } = useVirtualizedList(users, ITEM_HEIGHT, CONTAINER_HEIGHT);

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    if (scrollHeight - scrollTop <= clientHeight + 5) {
      loadMoreUsers();
    }
    onScroll(e);
  };

  return (
    <div ref={dropdownRef} className={styles.selectDropdown} onScroll={handleScroll}>
      <div style={{ height: users.length * ITEM_HEIGHT, position: 'relative' }}>
        {visibleItems.map((user, index) => (
          <SelectItem
            key={user.id}
            user={user}
            isSelected={user.id === selectedUser?.id}
            isHighlighted={index + start === highlightedIndex}
            onClick={() => handleUserSelect(user)}
            style={{ position: 'absolute', top: (index + start) * ITEM_HEIGHT }}
          />
        ))}
      </div>
      {loading && <div className={styles.selectLoading}>Загрузка...</div>}
    </div>
  );
};

export default SelectDropdown;
