'use client';
import Button from '@/components/atoms/button/Button';
import { MENU_LINKS } from '@/constants/sidebar';
import Link from 'next/link';
import styles from './Sidebar.module.scss';
import { FaChevronDown } from 'react-icons/fa';
import { useContext, useState } from 'react';
import { usePathname } from 'next/navigation';
import cx from 'classnames';
import { FaChevronRight } from 'react-icons/fa';
import { AppContext } from '@/contexts/AppContext';
import { AiFillCloseSquare } from "react-icons/ai";
import Image from 'next/image';
import Search from '@/components/molecules/search/Search';

const getIsActiveMenu = (pathname: string, menuUrl: string) => {
  return pathname === menuUrl;
};

const Sidebar = () => {
  const [selectedMenuId, setMenuId] = useState('');
  const { isSidebarVisible, setSidebarVisible } = useContext(AppContext);
  const pathname = usePathname();

  const handleMenuIdChange = (id: string) => {
    if (selectedMenuId === id) {
      setMenuId('');
    } else {
      setMenuId(id);
    }
  };

  return (
    <aside
      className={cx(styles.container, {
        [styles.visible]: isSidebarVisible,
        [styles.hidden]: !isSidebarVisible,
      })}
    >
      <div className={styles.open_icon}>
        <Button
          w='40px'
          h='40px'
          onClick={() => setSidebarVisible(true)}
          isTransparent
        >
          <FaChevronRight />
        </Button>
      </div>

      <div className={styles.logo_close_cover}>
        <Image
          src='/assets/logo.webp'
          alt='logo'
          priority
          width={150}
          height={30}
          className={styles.logo}
        />
        <Button
          w='40px'
          h='40px'
          onClick={() => setSidebarVisible(false)}
          isTransparent
        >
          <AiFillCloseSquare size={30} />
        </Button>
      </div>
      <div className={styles.links_section}>
        <div className={styles.search_cover}>
          <Search />
        </div>
        {MENU_LINKS.map((link) => (
          <div
            key={link.id}
            className={styles.link_sublink_cover}
          >
            <div
              className={cx(styles.link_cover, {
                [styles.active]: getIsActiveMenu(pathname, link.url),
              })}
            >
              <Link href={link.url}>
                <div
                  className={cx(styles.link, {
                    [styles.active]: getIsActiveMenu(pathname, link.url),
                  })}
                >
                  <div>
                    <link.icon />
                  </div>
                  <p>{link.name}</p>
                </div>
              </Link>
              {!!link?.subLinks && (
                <Button
                  w='40px'
                  h='40px'
                  onClick={() => handleMenuIdChange(link.id)}
                  isTransparent
                >
                  <FaChevronDown />
                </Button>
              )}
            </div>
            <div
              className={cx([styles.sublink_container], {
                [styles.visible]:
                  !!link?.subLinks && selectedMenuId === link.id,
                [styles.invisible]: !link?.subLinks || !selectedMenuId,
              })}
            >
              {link.subLinks?.map((sublink,i) => (
                <div
                  key={sublink.id}
                  className={styles.sublink_cover}
                >
                  <Link href={sublink.url}>
                    <div className={styles.sublink}>
                      <div></div>
                      <p>
                        {sublink.name}
                        <strong>{i + 1}</strong>
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
