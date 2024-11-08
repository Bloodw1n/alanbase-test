import { FC } from 'react';
import styles from './Select.module.scss';
import { useSelect } from './hooks/useSelect';
import { SelectDropdown } from './ui/SelectDropdown';
import { SelectHeader } from './ui/SelectHeader';

const Select: FC = () => {
  const {
    users,
    loadMoreUsers,
    loading,
    isOpen,
    toggleDropdown,
    selectValue,
    selectedUser,
    highlightedIndex,
    selectRef,
    handleUserSelect,
    dropdownRef,
  } = useSelect();

  return (
    <div ref={selectRef} className={styles.select}>
      <SelectHeader isOpen={isOpen} selectValue={selectValue} onClick={toggleDropdown} />
      {isOpen && (
        <SelectDropdown
          dropdownRef={dropdownRef}
          users={users}
          highlightedIndex={highlightedIndex}
          selectedUser={selectedUser}
          loading={loading}
          loadMoreUsers={loadMoreUsers}
          handleUserSelect={handleUserSelect}
        />
      )}
    </div>
  );
};

export default Select;
