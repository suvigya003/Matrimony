// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'members',
    path: '/dashboard/user',
    icon: getIcon('eva:people-fill'),
  },
  {
    title: 'premium package',
    path: '/dashboard/blog',
    icon: getIcon('eva:file-text-fill'),
  },
  {
    title: 'happy stories',
    path: '/dashboard/happy',
    icon: getIcon('eva:people-fill'),
  },
  {
    title: 'referral',
    path: '/dashboard/products',
    icon: getIcon('eva:shopping-bag-fill'),
  },

  // {
  //   title: 'counter',
  //   path: '/login',
  //   icon: getIcon('eva:lock-fill'),
  // },
  {
    title: 'communication',
    path: '/dashboard/communication',
    icon: getIcon('eva:person-add-fill'),
  },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: getIcon('eva:alert-triangle-fill'),
  // },
];

export default navConfig;
