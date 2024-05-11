export enum DIRECTION {
  RIGHT = 'right',
  LEFT = 'left',
  TOP = 'top',
  BOTTOM = 'bottom',
}

export enum STATUS {
  PENDING = '승인대기',
  APPROVED = '승인완료',
  DENIED = '승인거부',
}

export enum ALERT_OPTION {
  SUCCESS = 'success',
  ERROR = 'error',
  INFO = 'info',
  WARNING = 'warning',
}


export const DEFAULT_LIMIT = 10;

export const MEMBER_MANAGEMENT_TAB_DATA = [
  { id: '1', text: '기본정보 관리' },
  { id: '2', text: '투자유형 관리' },
  { id: '3', text: '입출금내역 조회' },
  { id: '4', text: '영업내역 조회' },
  { id: '5', text: '투자내역 조회' },
  { id: '6', text: '채권내역 조회' },
  { id: '7', text: 'SMS 관리' },
  { id: '8', text: '상담내역 관리' },
  { id: '9', text: '1:1문의내역 조회' },
];

export const MEMBER_MANAGEMENT_DATA = [
  {
    existing_type: '소득적격',
    application_type: '개인전문',
    doc: '보기',
    date: '2023-01-10 09:00:00',
    status: '승인대기',
    reason: '',
    approval_date: '',
  },
  {
    existing_type: '소득적격',
    application_type: '개인전문',
    doc: '보기',
    date: '2023-01-10 09:00:00',
    status: '승인거부',
    reason:
      '서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가',
    approval_date: '2023-01-10 09:00:00',
  },
  {
    existing_type: '소득적격',
    application_type: '소득적격',
    doc: '보기',
    date: '2023-01-10 09:00:00',
    status: '승인완료',
    reason: '',
    approval_date: '2023-01-10 09:00:00',
  },
  {
    existing_type: '소득적격',
    application_type: '개인전문',
    doc: '보기',
    date: '2023-01-10 09:00:00',
    status: '승인대기',
    reason: '',
    approval_date: '',
  },
  {
    existing_type: '소득적격',
    application_type: '개인전문',
    doc: '보기',
    date: '2023-01-10 09:00:00',
    status: '승인거부',
    reason:
      '서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가',
    approval_date: '2023-01-10 09:00:00',
  },
  {
    existing_type: '일반개인',
    application_type: '소득적격',
    doc: '보기',
    date: '2023-01-10 09:00:00',
    status: '승인완료',
    reason: '',
    approval_date: '2023-01-10 09:00:00',
  },
  {
    existing_type: '소득적격',
    application_type: '개인전문',
    doc: '보기',
    date: '2023-01-10 09:00:00',
    status: '승인대기',
    reason: '',
    approval_date: '',
  },
  {
    existing_type: '소득적격',
    application_type: '개인전문',
    doc: '보기',
    date: '2023-01-10 09:00:00',
    status: '승인거부',
    reason:
      '서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가',
    approval_date: '2023-01-10 09:00:00',
  },
  {
    existing_type: '소득적격',
    application_type: '소득적격',
    doc: '보기',
    date: '2023-01-10 09:00:00',
    status: '승인완료',
    reason: '',
    approval_date: '2023-01-10 09:00:00',
  },
  {
    existing_type: '소득적격',
    application_type: '개인전문',
    doc: '보기',
    date: '2023-01-10 09:00:00',
    status: '승인대기',
    reason: '',
    approval_date: '',
  },
  {
    existing_type: '소득적격',
    application_type: '개인전문',
    doc: '보기',
    date: '2023-01-10 09:00:00',
    status: '승인거부',
    reason:
      '서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가',
    approval_date: '2023-01-10 09:00:00',
  },
  {
    existing_type: '일반개인',
    application_type: '소득적격',
    doc: '보기',
    date: '2023-01-10 09:00:00',
    status: '승인완료',
    reason: '',
    approval_date: '2023-01-10 09:00:00',
  },
  {
    existing_type: '소득적격',
    application_type: '개인전문',
    doc: '보기',
    date: '2023-01-10 09:00:00',
    status: '승인대기',
    reason: '',
    approval_date: '',
  },
  {
    existing_type: '소득적격',
    application_type: '개인전문',
    doc: '보기',
    date: '2023-01-10 09:00:00',
    status: '승인거부',
    reason:
      '서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가',
    approval_date: '2023-01-10 09:00:00',
  },
  {
    existing_type: '소득적격',
    application_type: '소득적격',
    doc: '보기',
    date: '2023-01-10 09:00:00',
    status: '승인완료',
    reason: '',
    approval_date: '2023-01-10 09:00:00',
  },
  {
    existing_type: '소득적격',
    application_type: '개인전문',
    doc: '보기',
    date: '2023-01-10 09:00:00',
    status: '승인대기',
    reason: '',
    approval_date: '',
  },
  {
    existing_type: '소득적격',
    application_type: '개인전문',
    doc: '보기',
    date: '2023-01-10 09:00:00',
    status: '승인거부',
    reason:
      '서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가',
    approval_date: '2023-01-10 09:00:00',
  },
  {
    existing_type: '일반개인',
    application_type: '소득적격',
    doc: '보기',
    date: '2023-01-10 09:00:00',
    status: '승인완료',
    reason: '',
    approval_date: '2023-01-10 09:00:00',
  },
  {
    existing_type: '소득적격',
    application_type: '개인전문',
    doc: '보기',
    date: '2023-01-10 09:00:00',
    status: '승인대기',
    reason: '',
    approval_date: '',
  },
  {
    existing_type: '소득적격',
    application_type: '개인전문',
    doc: '보기',
    date: '2023-01-10 09:00:00',
    status: '승인거부',
    reason:
      '서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가',
    approval_date: '2023-01-10 09:00:00',
  },
  {
    existing_type: '소득적격',
    application_type: '소득적격',
    doc: '보기',
    date: '2023-01-10 09:00:00',
    status: '승인완료',
    reason: '',
    approval_date: '2023-01-10 09:00:00',
  },
  {
    existing_type: '소득적격',
    application_type: '개인전문',
    doc: '보기',
    date: '2023-01-10 09:00:00',
    status: '승인대기',
    reason: '',
    approval_date: '',
  },
  {
    existing_type: '소득적격',
    application_type: '개인전문',
    doc: '보기',
    date: '2023-01-10 09:00:00',
    status: '승인거부',
    reason:
      '서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가',
    approval_date: '2023-01-10 09:00:00',
  },
  {
    existing_type: '일반개인',
    application_type: '소득적격',
    doc: '보기',
    date: '2023-01-10 09:00:00',
    status: '승인완료',
    reason: '',
    approval_date: '2023-01-10 09:00:00',
  },
  {
    existing_type: '소득적격',
    application_type: '개인전문',
    doc: '보기',
    date: '2023-01-10 09:00:00',
    status: '승인대기',
    reason: '',
    approval_date: '',
  },
  {
    existing_type: '소득적격',
    application_type: '개인전문',
    doc: '보기',
    date: '2023-01-10 09:00:00',
    status: '승인거부',
    reason:
      '서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가',
    approval_date: '2023-01-10 09:00:00',
  },
  {
    existing_type: '소득적격',
    application_type: '소득적격',
    doc: '보기',
    date: '2023-01-10 09:00:00',
    status: '승인완료',
    reason: '',
    approval_date: '2023-01-10 09:00:00',
  },
  {
    existing_type: '소득적격',
    application_type: '개인전문',
    doc: '보기',
    date: '2023-01-10 09:00:00',
    status: '승인대기',
    reason: '',
    approval_date: '',
  },
  {
    existing_type: '소득적격',
    application_type: '개인전문',
    doc: '보기',
    date: '2023-01-10 09:00:00',
    status: '승인거부',
    reason:
      '서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가',
    approval_date: '2023-01-10 09:00:00',
  },
  {
    existing_type: '일반개인',
    application_type: '소득적격',
    doc: '보기',
    date: '2023-01-10 09:00:00',
    status: '승인완료',
    reason: '',
    approval_date: '2023-01-10 09:00:00',
  },
  {
    existing_type: '소득적격',
    application_type: '개인전문',
    doc: '보기',
    date: '2023-01-10 09:00:00',
    status: '승인대기',
    reason: '',
    approval_date: '',
  },
  {
    existing_type: '소득적격',
    application_type: '개인전문',
    doc: '보기',
    date: '2023-01-10 09:00:00',
    status: '승인거부',
    reason:
      '서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가',
    approval_date: '2023-01-10 09:00:00',
  },
  {
    existing_type: '소득적격',
    application_type: '소득적격',
    doc: '보기',
    date: '2023-01-10 09:00:00',
    status: '승인완료',
    reason: '',
    approval_date: '2023-01-10 09:00:00',
  },
  {
    existing_type: '소득적격',
    application_type: '개인전문',
    doc: '보기',
    date: '2023-01-10 09:00:00',
    status: '승인대기',
    reason: '',
    approval_date: '',
  },
  {
    existing_type: '소득적격',
    application_type: '개인전문',
    doc: '보기',
    date: '2023-01-10 09:00:00',
    status: '승인거부',
    reason:
      '서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가',
    approval_date: '2023-01-10 09:00:00',
  },
  {
    existing_type: '일반개인',
    application_type: '소득적격',
    doc: '보기',
    date: '2023-01-10 09:00:00',
    status: '승인완료',
    reason: '',
    approval_date: '2023-01-10 09:00:00',
  },
  {
    existing_type: '소득적격',
    application_type: '개인전문',
    doc: '보기',
    date: '2023-01-10 09:00:00',
    status: '승인대기',
    reason: '',
    approval_date: '',
  },
  {
    existing_type: '소득적격',
    application_type: '개인전문',
    doc: '보기',
    date: '2023-01-10 09:00:00',
    status: '승인거부',
    reason:
      '서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가',
    approval_date: '2023-01-10 09:00:00',
  },
  {
    existing_type: '소득적격',
    application_type: '소득적격',
    doc: '보기',
    date: '2023-01-10 09:00:00',
    status: '승인완료',
    reason: '',
    approval_date: '2023-01-10 09:00:00',
  },
  {
    existing_type: '소득적격',
    application_type: '개인전문',
    doc: '보기',
    date: '2023-01-10 09:00:00',
    status: '승인대기',
    reason: '',
    approval_date: '',
  },
  {
    existing_type: '소득적격',
    application_type: '개인전문',
    doc: '보기',
    date: '2023-01-10 09:00:00',
    status: '승인거부',
    reason:
      '서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가',
    approval_date: '2023-01-10 09:00:00',
  },
  {
    existing_type: '일반개인',
    application_type: '소득적격',
    doc: '보기',
    date: '2023-01-10 09:00:00',
    status: '승인완료',
    reason: '',
    approval_date: '2023-01-10 09:00:00',
  },
  {
    existing_type: '소득적격',
    application_type: '개인전문',
    doc: '보기',
    date: '2023-01-10 09:00:00',
    status: '승인대기',
    reason: '',
    approval_date: '',
  },
  {
    existing_type: '소득적격',
    application_type: '개인전문',
    doc: '보기',
    date: '2023-01-10 09:00:00',
    status: '승인거부',
    reason:
      '서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가',
    approval_date: '2023-01-10 09:00:00',
  },
  {
    existing_type: '소득적격',
    application_type: '소득적격',
    doc: '보기',
    date: '2023-01-10 09:00:00',
    status: '승인완료',
    reason: '',
    approval_date: '2023-01-10 09:00:00',
  },
  {
    existing_type: '소득적격',
    application_type: '개인전문',
    doc: '보기',
    date: '2023-01-10 09:00:00',
    status: '승인대기',
    reason: '',
    approval_date: '',
  },
  {
    existing_type: '소득적격',
    application_type: '개인전문',
    doc: '보기',
    date: '2023-01-10 09:00:00',
    status: '승인거부',
    reason:
      '서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가',
    approval_date: '2023-01-10 09:00:00',
  },
  {
    existing_type: '일반개인',
    application_type: '소득적격',
    doc: '보기',
    date: '2023-01-10 09:00:00',
    status: '승인완료',
    reason: '',
    approval_date: '2023-01-10 09:00:00',
  },
  {
    existing_type: '소득적격',
    application_type: '개인전문',
    doc: '보기',
    date: '2023-01-10 09:00:00',
    status: '승인대기',
    reason: '',
    approval_date: '',
  },
  {
    existing_type: '소득적격',
    application_type: '개인전문',
    doc: '보기',
    date: '2023-01-10 09:00:00',
    status: '승인거부',
    reason:
      '서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가',
    approval_date: '2023-01-10 09:00:00',
  }
];