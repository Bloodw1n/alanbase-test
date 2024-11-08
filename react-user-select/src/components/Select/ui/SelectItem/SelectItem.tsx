import { forwardRef, memo, CSSProperties } from 'react';
import styles from '@components/Select/Select.module.scss';
import { SelectItemProps } from './types';

const SelectItem = forwardRef<HTMLDivElement, SelectItemProps & { style?: CSSProperties }>(
  ({ user, isSelected, isHighlighted, onClick, style }, ref) => (
    <div
      ref={ref}
      style={style}
      className={`${styles.selectItem} ${isSelected ? styles.selected : ''} ${isHighlighted ? styles.highlighted : ''}`}
      onClick={onClick}
      title={`${user.last_name} ${user.first_name}, ${user.job || 'Не указана должность'}`} // Полный текст при наведении
    >
      <div className={styles.selectIcon}>{user.last_name.charAt(0).toUpperCase()}</div>
      <div className={styles.selectText}>
        {user.last_name} {user.first_name}, {user.job || 'Не указана должность'}
      </div>
    </div>
  )
);

export default memo(SelectItem);
