'use client';
import Button from '@/components/atoms/button/Button';
import styles from './Navbar.module.scss';
import Image from 'next/image';
import Dropdown from '@/components/atoms/dropdown/Dropdown';
import { useRef, useState } from 'react';
import useClickOutside from '@/hooks/useClickOutside';

const NOTIFICATIONS = [
  'You have a new transaction!',
  'Transaction has been successfully deposited!',
  'Payment cancelled!',
  'Fiscus mentioned you!',
  'You got new capital advance!',
];

const Notification = () => {
  const [_, setSelectedNotification] = useState('');
  const notificationRef = useRef<HTMLDivElement | null>(null);
  const [isNotificationDropdownVisible, setNotificationDropdownVisible] =
    useState(false);

  const handleClose = () => {
    setNotificationDropdownVisible(false);
  };

  const handleNotificationsChange = (notification: string) => {
    setSelectedNotification(notification);
    handleClose();
  };

  const handleNotificationDropdownToggle = () => {
    setNotificationDropdownVisible(!isNotificationDropdownVisible);
  };

  useClickOutside(notificationRef, () => handleClose());

  return (
    <div
      className={styles.notification_cover}
      role='button'
      ref={notificationRef}
    >
      <Button
        w='45px'
        h='45px'
        onClick={handleNotificationDropdownToggle}
        isOutline
      >
        <Image
          src='/assets/bell.webp'
          alt='bell'
          width={20}
          height={20}
        />
      </Button>
      <Dropdown isVisible={isNotificationDropdownVisible}>
        <ul className={styles.notification_content}>
          {NOTIFICATIONS.map((notification) => (
            <li
              key={notification}
              onClick={() => handleNotificationsChange(notification)}
            >
              <button>Check</button>
              <p>{notification}</p>
            </li>
          ))}
        </ul>
      </Dropdown>
    </div>
  );
};

export default Notification;
