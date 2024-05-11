import clx from 'classnames';
import { FC, ButtonHTMLAttributes, PropsWithChildren } from 'react';
import styles from './Button.module.scss';

export type ButtonProps = {
  className: string;
  isPrimary: boolean;
  isOutline: boolean;
  isTransparent: boolean;
  w: string;
  h: string;
};

const Button: FC<
  PropsWithChildren<
    ButtonHTMLAttributes<HTMLButtonElement> & Partial<ButtonProps>
  >
> = ({
  children,
  className,
  isPrimary,
  isOutline,
  isTransparent,
  w,
  h,
  ...props
}) => {
  return (
    <button
      type={props.type || 'button'}
      className={clx(styles.btn, className, {
        [styles.primary]: isPrimary,
        [styles.outline]: isOutline,
        [styles.transparent]: isTransparent,
        [styles.disabled]: props.disabled,
      })}
      disabled={props.disabled}
      style={{
        width: w || 'inherit',
        height: h || 'inherit',
      }}
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;
