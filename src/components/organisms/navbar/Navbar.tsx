'use client';
import styles from './Navbar.module.scss';
import Image from 'next/image';
import { FaChevronLeft } from 'react-icons/fa';
import { RiMenu3Line } from 'react-icons/ri';
import Button from '@/components/atoms/button/Button';
import Search from '@/components/molecules/search/Search';
import Notification from './Notification';
import Settings from './Settings';
import { useContext } from 'react';
import { AppContext } from '@/contexts/AppContext';

const Navbar = () => {
  const { isSidebarVisible, setSidebarVisible } = useContext(AppContext);
  return (
    <header className={styles.container}>
      <div className={styles.left_section}>
        <div className={styles.left_left_section}>
          <Image
            src='/assets/logo.webp'
            alt='logo'
            priority
            width={368}
            height={64}
            className={styles.logo}
          />
          {isSidebarVisible && (
            <Button
              w='40px'
              h='40px'
              onClick={() => setSidebarVisible(false)}
              isTransparent
            >
              <FaChevronLeft />
            </Button>
          )}
        </div>

        <div className={styles.left_right_section}>
          <Button
            w='40px'
            h='40px'
            onClick={() => setSidebarVisible(true)}
            className={styles.menu_icon}
            isTransparent
          >
            <RiMenu3Line size={30} />
          </Button>
          <div className={styles.profile_image}>
            <Image
              src='/assets/kim.png'
              alt='loan manager'
              width={48}
              height={48}
            />
          </div>

          <div className={styles.info}>
            <p>김관리님</p>
            <p>대출관리팀</p>
          </div>
        </div>
      </div>

      <div className={styles.right_section}>
        <Notification />
        <div className={styles.search_cover}>
          <Search />
        </div>
        <Button
          w='45px'
          h='45px'
          isOutline
        >
          <Image
            src='/assets/external-link.webp'
            alt='external-link'
            width={22}
            height={22}
          />
        </Button>

        <Settings />
      </div>
    </header>
  );
};

export default Navbar;
