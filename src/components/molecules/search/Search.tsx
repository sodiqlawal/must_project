import Input from '@/components/atoms/input/Input';
import Image from 'next/image';
import styles from './Search.module.scss';

const Search = () => {
  return (
    <div className={styles.container}>
      <Input
        placeholder='메뉴 검색'
        preIcon={
          <Image
            src='/assets/search.webp'
            alt='search'
            width={25}
            height={25}
          />
        }
      />
    </div>
  );
};

export default Search;
