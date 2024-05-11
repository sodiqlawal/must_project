import type { FC, PropsWithChildren, ReactElement } from 'react';
import { ModalController } from '@/hooks/useModal';
import { CgClose } from "react-icons/cg";
import classNames from 'classnames';
import styles from './Modal.module.scss';

const Modal: FC<
  PropsWithChildren<{
    controller: ModalController;
    header?: ReactElement;
    className?: string;
  }>
> = ({ controller, children, header, className }) => {
  if (!controller.isOpen) return null;
  return (
    <div
      className={styles.modal}
      data-testid='modal'
    >
      <div className={classNames(styles.paper, className)}>
        <div className={styles.header}>
          <h3>{header}</h3>
          <div
            className={styles.close}
            onClick={controller.close}
          >
            <CgClose
              size={20}
            />
          </div>
        </div>

        <div className={styles.children}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
