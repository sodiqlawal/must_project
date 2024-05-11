import { IoHome } from 'react-icons/io5';
import { BiSolidUser } from 'react-icons/bi';
import { MdBusinessCenter, MdPayments, MdCalculate } from 'react-icons/md';
import { FaCommentsDollar } from 'react-icons/fa6';
import { PiChartLineUpBold } from 'react-icons/pi';
import { IoIosDocument } from 'react-icons/io';
import { BsArrowRepeat, BsChatLeft } from 'react-icons/bs';
import { AiFillTool } from 'react-icons/ai';

export const MENU_LINKS = [
  {
    id: '1',
    name: '대시보드',
    icon: IoHome,
    url: '/dashboard',
  },
  {
    id: '2',
    name: '회원 관리',
    icon: BiSolidUser,
    url: '/dashboard/member-management',
  },
  {
    id: '3',
    name: '영업 관리',
    icon: MdBusinessCenter,
    url: '/dashboard/business-management',
  },
  {
    id: '4',
    name: '펀딩 관리',
    icon: FaCommentsDollar,
    url: '/dashboard/funding-management',
  },
  {
    id: '5',
    name: '투자 관리',
    icon: PiChartLineUpBold,
    url: '/dashboard/investment-management',
  },
  {
    id: '6',
    name: '채권 관리',
    icon: IoIosDocument,
    url: '/dashboard/bond-management',
  },
  {
    id: '7',
    name: '지급 관리',
    icon: MdPayments,
    url: '/dashboard/payment-management',
  },
  {
    id: '8',
    name: '세무 관리',
    icon: MdCalculate,
    url: '/dashboard/tax-management',
  },
  {
    id: '9',
    name: '변경내역/로그 조회',
    icon: BsArrowRepeat,
    url: '/dashboard/change-history',
  },
  {
    id: '10',
    name: '전시/게시판 관리',
    icon: BsChatLeft,
    url: '/dashboard/exhibition-management',
  },
  {
    id: '11',
    name: '시스템 관리',
    icon: AiFillTool,
    url: '/dashboard/system-management',
    subLinks: [
      {
        id: '1',
        name: '메뉴',
        url: '/dashboard/actions/menu-one',
      },
      {
        id: '2',
        name: '메뉴',
        url: '/dashboard/actions/menu-two',
      },
      {
        id: '3',
        name: '메뉴',
        url: '/dashboard/actions/menu-three',
      },
    ],
  },
];
