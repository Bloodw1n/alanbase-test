import { useState } from 'react';
import { User } from '../types';

export const useVirtualizedList = (items: User[], itemHeight: number, containerHeight: number) => {
  const [scrollTop, setScrollTop] = useState(0);
  const visibleCount = Math.ceil(containerHeight / itemHeight) + 2;

  const start = Math.max(0, Math.floor(scrollTop / itemHeight) - 1);
  const end = Math.min(items.length, start + visibleCount);

  const visibleItems = items.slice(start, end);

  const onScroll = (event: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(event.currentTarget.scrollTop);
  };

  return { visibleItems, onScroll, start, end };
};
