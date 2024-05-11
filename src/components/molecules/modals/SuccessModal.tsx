import { ModalController } from '@/hooks/useModal';
import { FC } from 'react';
import Modal from './Modal';
import Image from 'next/image';
import Button from '@/components/atoms/button/Button';
import styles from './Modal.module.scss';

const SuccessModal: FC<{
  controller: ModalController;
  desc: string;
  onClick?: Function;
}> = ({ controller, desc, onClick }) => {
  return (
    <Modal
      controller={controller}
      header={
        <Image
          src='/assets/success.svg'
          alt='success'
          width={30}
          height={30}
        />
      }
    >
      <div className={styles.success_content}>
        <p>{desc}</p>
        <div>
          <Button
            isPrimary
            w='170px'
            h='44px'
            onClick={() => onClick?.()}
          >
            확인
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default SuccessModal;
