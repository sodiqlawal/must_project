import React, { FC, useEffect, useState } from 'react';
import styles from './Table.module.scss';
import cx from 'classnames';
import { FaCheck, FaSquareFull } from 'react-icons/fa';

const CheckBtn: FC<{
  i?: number;
  isSelected?: boolean;
  isPending?: boolean;
  onClick: () => void;
}> = ({ i, isSelected, isPending, onClick }) => {
  return (
    <div className={cx(styles.check_btn_cover)}>
      <div
        className={cx(styles.check_btn, {
          [styles.white]: !i || i % 3 === 0 || i === 0 || isPending,
          [styles.primary]: isSelected,
        })}
        onClick={onClick}
      >
        <FaCheck
          className={cx(styles.white_color, styles.check_icon, {
            [styles.visible]: isSelected,
          })}
          size={10}
        />
        <FaSquareFull
          className={cx(styles.primary_color, styles.square_icon, {
            [styles.visible]: isPending,
          })}
          size={10}
        />
      </div>
    </div>
  );
};

export interface TableField<T> {
  name: keyof T;
  displayName?: string;
}

export interface tableData<T> {
  items: T[];
}

export type FieldBuilder<T, D> = (
  field: TableField<T>,
  data: D,
  row: number,
  column: number
) => React.ReactNode;

export interface TableProps<T, D> {
  fields: TableField<T>[];
  tableData: D[];
  noDataMessage?: string;
  builder: FieldBuilder<T, D>;
  startColumn?: number;
  startRow?: number;
  columns?: number;
  onSelectRowIds?: (arg: number[]) => void;
  rows?: number;
}

function Table<TField, TData = TField>({
  tableData,
  fields,
  builder,
  columns,
  rows,
  onSelectRowIds,
  noDataMessage = '조회 결과가 없습니다.',
  startColumn = 0,
  startRow = 0,
}: TableProps<TField, TData>) {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  // TODO: use real id, instead of the index
  const handleSelectId = (id: number) => {
    if (selectedIds.includes(id)) {
      setSelectedIds([...selectedIds].filter((i) => i !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  // TODO: use real id, instead of the index, and update type
  const handleSelectAllIds = (data: TData[]) => {
    if (tableData.length === selectedIds.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds([...data].map((_, i) => i));
    }
  };

  const numberOfColumns = columns || fields.length;
  const numberOfRows = tableData.length > 0 ? rows || tableData.length : 0;
  const columnElements: React.ReactNode[] = [];

  for (let i = startRow; i < startRow + numberOfRows; i += 1) {
    const data = tableData[i];
    const rowElements: React.ReactNode[] = [
      <td key={-1}>
        <CheckBtn
          i={i}
          onClick={() => handleSelectId(i)}
          isSelected={selectedIds.includes(i)}
        />
      </td>,
    ];

    for (let j = startColumn; j < startColumn + numberOfColumns; j += 1) {
      const field = fields[j];

      rowElements.push(<td key={j}>{builder(field, data, i, j)}</td>);
    }

    columnElements.push(
      <tr
        key={i}
        className={cx({ [styles.selected]: selectedIds.includes(i) })}
      >
        {rowElements}
      </tr>
    );
  }

  useEffect(() => {
    onSelectRowIds?.(selectedIds);
  }, [selectedIds.length]);

  return (
    <div
      className={styles.table_container}
      data-testid='table'
    >
      <table className={styles.table}>
        <thead>
          <tr>
            <th>
              <CheckBtn
                onClick={() => handleSelectAllIds(tableData)}
                isSelected={selectedIds.length === tableData.length}
                isPending={
                  selectedIds.length > 0 &&
                  selectedIds.length < tableData.length
                }
              />
            </th>
            {fields.map((data) => (
              <th
                scope='col'
                key={Math.random().toString()}
              >
                {data.displayName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className='tbody'>{columnElements}</tbody>
      </table>
      <div
        className={cx(styles.table_min_height, {
          [styles.d_none]: columnElements?.length > 0,
        })}
      >
        <div className={styles.no_data}>{noDataMessage}</div>
      </div>
    </div>
  );
}

export default Table;
