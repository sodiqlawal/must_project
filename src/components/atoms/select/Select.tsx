import { useRef, useState } from 'react';
import clx from 'classnames';
import useClickOutside from '@/hooks/useClickOutside';
import styles from './Select.module.scss';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

import cx from 'classnames';

interface TSelectProps<T> extends React.SelectHTMLAttributes<any> {
  getValue: (option: T) => string;
  getName: (option: T) => string;
  onValChange?: (option: T) => void;
  options: T[];
  defaultName?: string;
  defaultValue?: string;
  placeholder?: string;
}

export function Select<T>(props: TSelectProps<T>) {
  const {
    getValue,
    getName,
    options,
    defaultName,
    defaultValue,
    ...restProps
  } = props;
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState<T | null>(null);
  const wrapperRef = useRef(null);
  useClickOutside(wrapperRef, () => setDropdownVisible(false));

  const handleClick = (val: T) => {
    setDropdownVisible(!isDropdownVisible);
    setSelectedOption(val);
    props?.onValChange?.(val)!;
  };

  const toggleVisibility = () => {
    if (props.disabled) return;
    setDropdownVisible(!isDropdownVisible);
  };

  const getIsActive = (option: any) => {
    return (getValue(selectedOption!) || defaultValue) === getValue(option);
  };

  return (
    <div
      className={styles.container}
      title={props.placeholder}
      ref={wrapperRef}
    >
      <div
        className={clx(styles.field)}
        onClick={toggleVisibility}
      >
        <p>
          {getName(selectedOption!) ||
            defaultName ||
            restProps.placeholder ||
            ''}
        </p>
        {isDropdownVisible ? <FaChevronUp /> : <FaChevronDown />}
      </div>

      <div
        className={cx(styles.dropdown, {
          [styles.active]: isDropdownVisible,
        })}
      >
        {options.map((option) => (
          <div
            key={getValue(option)}
            className={clx(styles.option, {
              [styles.active]: getIsActive(option),
            })}
          >
            <p onClick={() => handleClick(option)}>{getName(option)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
