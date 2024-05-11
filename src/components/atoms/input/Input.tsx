import { FC, InputHTMLAttributes, ReactElement } from 'react';
import styles from './Input.module.scss';
import cx from 'classnames';

const Input: FC<
  InputHTMLAttributes<HTMLInputElement> & { preIcon?: ReactElement }
> = ({ preIcon, ...props }) => {
  return (
    <div className={cx(styles.container, { [styles.is_pre_icon]: !!preIcon })}>
      {!!preIcon && <div className={styles.pre_icon}>{preIcon}</div>}
      <input
        type='text'
        {...props}
      />
    </div>
  );
};

export default Input;
