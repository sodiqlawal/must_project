'use client';
import { DIRECTION } from '@/constants';
import { FC, PropsWithChildren } from 'react';
import styles from './Dropdown.module.scss';
import cx from 'classnames';

const Dropdown: FC<
  PropsWithChildren<{ isVisible: boolean; direction?: DIRECTION }>
> = ({ direction = DIRECTION.LEFT, isVisible, children }) => {
  return (
    <div
      className={cx(styles.dropdown, styles[direction], {
        [styles.visible]: isVisible,
      })}
    >
      {children}
    </div>
  );
};

export default Dropdown;
