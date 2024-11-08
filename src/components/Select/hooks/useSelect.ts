import { useState, useRef, useEffect } from 'react';
import { useUsers } from './useUsers';
import { User } from '../types';

export const useSelect = () => {
  const { users, loadMoreUsers, hasMore, loading } = useUsers();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [selectValue, setSelectValue] = useState<string>('LastName FirstName, jobTitle');
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
  const selectRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleUserSelect = (user: User) => {
    setSelectedUser(user);
    setSelectValue(`${user.last_name} ${user.first_name}, ${user.job || 'Не указана должность'}`);
    // setIsOpen(false); // Закрытие списка после выбора
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;
      if (event.key === 'ArrowDown') {
        setHighlightedIndex((prev) => (prev < users.length - 1 ? prev + 1 : 0));
      } else if (event.key === 'ArrowUp') {
        setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : users.length - 1));
      } else if (event.key === 'Enter' && highlightedIndex >= 0) {
        handleUserSelect(users[highlightedIndex]);
      }

      if (dropdownRef.current && highlightedIndex >= 0) {
        const itemHeight = 32;
        const containerHeight = dropdownRef.current.clientHeight;
        const scrollTop = dropdownRef.current.scrollTop;
        const itemTop = highlightedIndex * itemHeight;

        if (itemTop < scrollTop) {
          dropdownRef.current.scrollTop = itemTop;
        } else if (itemTop + itemHeight > scrollTop + containerHeight) {
          dropdownRef.current.scrollTop = itemTop - containerHeight + itemHeight;
        }
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, highlightedIndex, users]);

  return {
    users,
    loadMoreUsers,
    hasMore,
    loading,
    isOpen,
    toggleDropdown,
    selectValue,
    selectedUser,
    highlightedIndex,
    selectRef,
    dropdownRef,
    handleUserSelect,
  };
};
