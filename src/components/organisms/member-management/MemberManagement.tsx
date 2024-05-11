'use client';
import Button from '@/components/atoms/button/Button';
import { Select } from '@/components/atoms/select/Select';
import SuccessModal from '@/components/molecules/modals/SuccessModal';
import Tabs from '@/components/molecules/tabs/Tabs';
import { DEFAULT_LIMIT, MEMBER_MANAGEMENT_TAB_DATA } from '@/constants';
import useModal from '@/hooks/useModal';
import { useState } from 'react';
import styles from './MemberManagement.module.scss';
import MemberManagementTable from './MemberManagementTable';

const DEFAULT_TAB_ID = '3';

const MemberManagement = () => {
  const [selectedTabId, setSelectedTabId] = useState(DEFAULT_TAB_ID);
  const [limit, setLimit] = useState(DEFAULT_LIMIT);
  const [status, setStatus] = useState('승인여부 전체');
  const [selectedMembersId, setSelectedMembersId] = useState<number[]>([]);
  const successModal = useModal();

  const handleLimitChange = (val: { name: string; value: string }) => {
    setLimit(Number(val.value));
  };

  const handleStatusChange = (stat: string) => {
    setStatus(stat);
  };

  const handleTabClick = (tabId: string) => {
    setSelectedTabId(tabId);
  };

  return (
    <div className={styles.container}>
      {/* TABS */}
      <div className={styles.tab_cover}>
        <div className={styles.title_cover}>
          <h1>회원상세</h1>
          <p>필수항목</p>
        </div>
        <Tabs
          options={MEMBER_MANAGEMENT_TAB_DATA}
          onSelectTabId={handleTabClick}
          defaultId={DEFAULT_TAB_ID}
        />
      </div>

      {/* TABLE SECTION */}
      <div className={styles.table_section}>
        {/* HEADER */}
        <div className={styles.table_header}>
          <div className={styles.top}>
            <div>
              <h2>신청 목록</h2>
              <p>
                (총 50명 | 승인대기 <span>1</span>건)
              </p>
            </div>

            <div>
              <Select
                options={['승인여부 전체', '승인대기', '승인완료', '승인거부']}
                getName={(option) => option}
                getValue={(option) => option}
                defaultValue={'승인여부 전체'}
                defaultName={'승인여부 전체'}
                onValChange={handleStatusChange}
              />
              <Select
                options={[
                  { name: '5개씩 보기', value: '5' },
                  { name: '10개씩 보기', value: '10' },
                  { name: '15개씩 보기', value: '15' },
                  { name: '20개씩 보기', value: '20' },
                ]}
                getName={(option) => option?.name}
                getValue={(option) => option?.value}
                onValChange={handleLimitChange}
                defaultValue={DEFAULT_LIMIT.toString()}
                defaultName='10개씩 보기'
              />
              <Select
                options={['신청일시순', '승인일시순']}
                getName={(option) => option}
                getValue={(option) => option}
                defaultValue={'신청일시순'}
                defaultName={'신청일시순'}
              />
            </div>
          </div>

          <div className={styles.bottom}>
            <div>
              <Button
                isPrimary
                w='100px'
                h='39px'
              >
                등록
              </Button>
            </div>

            <div>
              <p>선택한 {selectedMembersId.length}건</p>
              <Select
                options={['승인완료', '승인거부']}
                getName={(option) => option}
                getValue={(option) => option}
                placeholder='승인상태 변경'
              />
              <Button
                isPrimary
                w='100px'
                h='39px'
                onClick={successModal.open}
              >
                저장
              </Button>
            </div>
          </div>
        </div>

        {/* TABLE */}
        <MemberManagementTable
          limit={limit}
          status={status}
          onSelectMembersId={setSelectedMembersId}
        />
      </div>

      <SuccessModal
        controller={successModal}
        desc='저장되었습니다.'
        onClick={successModal.close}
      />
    </div>
  );
};

export default MemberManagement;
