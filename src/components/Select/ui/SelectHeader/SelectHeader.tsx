import { FC } from 'react';
import ArrowBottom from '@assets/arrow_bottom.svg?react';
import styles from '@components/Select/Select.module.scss';
import { SelectHeaderProps } from './types';

const SelectHeader: FC<SelectHeaderProps> = ({ isOpen, selectValue, onClick }) => (
  <div className={`${styles.selectHeader} ${isOpen ? styles.open : ''}`} onClick={onClick}>
    {selectValue}
    <ArrowBottom />
  </div>
);

export default SelectHeader;
