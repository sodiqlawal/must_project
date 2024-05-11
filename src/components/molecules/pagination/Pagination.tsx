import Button from '@/components/atoms/button/Button';
import styles from './Pagination.module.scss';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import { FC, useEffect, useMemo } from 'react';
import cx from 'classnames';

const Pagination: FC<{
  total: number;
  page: number;
  limit: number;
  onSetPage: Function;
}> = ({ total, page, limit, onSetPage }) => {
  const numberOfPages = useMemo(() => {
    return Math.ceil(total / limit);
  }, [total, limit]);

  const handleNext = () => {
    if (page >= numberOfPages) return;
    onSetPage((val: number) => val + 1);
  };

  const handlePrev = () => {
    if (page <= 1) return;
    onSetPage((val: number) => val - 1);
  };

  useEffect(() => {
    onSetPage(1);
  }, [limit]);

  if (!total || total === 0) return null;
  return (
    <div className={styles.container}>
      <Button
        isTransparent
        onClick={() => onSetPage(1)}
        disabled={page === 1}
      >
        <HiChevronDoubleLeft size={30} />
      </Button>
      <Button
        isTransparent
        onClick={handlePrev}
        disabled={page === 1}
      >
        <FaChevronLeft size={20} />
      </Button>
      <div className={styles.pages}>
        {Array.from({ length: numberOfPages }).map((_, i) => (
          <Button
            key={i}
            isPrimary={page === i + 1}
            isTransparent={page !== i + 1}
            className={cx({ [styles.active]: page === i + 1 })}
            onClick={() => onSetPage(i + 1)}
            w='40px'
            h='40px'
          >
            {i + 1}
          </Button>
        ))}
      </div>
      <Button
        isTransparent
        onClick={handleNext}
        disabled={page === numberOfPages}
      >
        <FaChevronRight size={20} />
      </Button>
      <Button
        isTransparent
        onClick={() => onSetPage(numberOfPages)}
        disabled={page === numberOfPages}
      >
        <HiChevronDoubleRight size={30} />
      </Button>
    </div>
  );
};

export default Pagination;
