import Table from '@/components/molecules/table/Table';
import { MEMBER_MANAGEMENT_DATA, STATUS } from '@/constants';
import styles from './MemberManagement.module.scss';
import cx from 'classnames';
import { FC, useEffect, useState } from 'react';
import { getPaginatedData } from '@/utils/getPaginatedData';
import Pagination from '@/components/molecules/pagination/Pagination';

type IData = {
  existing_type: string;
  application_type: string;
  doc: string;
  date: string;
  status: string;
  reason: string;
  approval_date: string;
};

const getFilteredData = (data: IData[], key: keyof IData, value: string) => {
  let newData = [...data];

  if (key === 'status') {
    if (value === '승인여부 전체') {
      newData = data;
    } else {
      newData = [...data].filter((d) => d[key] === value);
    }
  }

  return newData;
};

type TableData = IData & {
  sn: number;
};

const tableHead: { name: keyof TableData; displayName: string }[] = [
  { name: 'sn', displayName: 'NO' },
  { name: 'existing_type', displayName: '기존유형' },
  { name: 'application_type', displayName: '신청유형' },
  { name: 'doc', displayName: '제출서류' },
  { name: 'date', displayName: '신청일시' },
  { name: 'status', displayName: '승인여부' },
  { name: 'reason', displayName: '승인거부 사유' },
  { name: 'approval_date', displayName: '승인일시' },
];
const MemberManagementTable: FC<{
  limit: number;
  status: string;
  onSelectMembersId: (arg: number[]) => void;
}> = ({ limit, status, onSelectMembersId }) => {
  const [page, setPage] = useState(1);
  const [filteredData, setFilteredData] = useState<IData[]>(
    MEMBER_MANAGEMENT_DATA
  );
  const dropDownSelected = (label: string) => {};

  useEffect(() => {
    setFilteredData(getFilteredData(MEMBER_MANAGEMENT_DATA, 'status', status));
    setPage(1);
  }, [status]);

  return (
    <div className={styles.management_table}>
      <Table
        fields={tableHead}
        tableData={getPaginatedData(filteredData, page, limit)}
        onSelectRowIds={onSelectMembersId}
        builder={(field, data, i) => {
          switch (field.name) {
            case 'sn':
              return `${i + 1}`;
            case 'doc':
              return <button className={styles.doc_button}>{data.doc}</button>;
            case 'status':
              return (
                <div
                  className={cx(styles.status, {
                    [styles.approved]: data.status === STATUS.APPROVED,
                    [styles.denied]: data.status === STATUS.DENIED,
                    [styles.pending]: data.status === STATUS.PENDING,
                  })}
                >
                  {data.status}
                </div>
              );

            default:
              return data[field.name];
          }
        }}
      />

      <Pagination
        total={filteredData.length}
        page={page}
        onSetPage={setPage}
        limit={limit}
      />
    </div>
  );
};

export default MemberManagementTable;
