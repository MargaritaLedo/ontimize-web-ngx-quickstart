import { MenuRootItem } from 'ontimize-web-ngx';
import { CardContentComponent } from './card-content/card-content.component';

export const MENU_CONFIG: MenuRootItem[] = [
  { id: 'home', name: 'HOME', icon: 'dashboard', route: '/main/home' },
  {
    id: 'views', name: 'VIEW', icon: 'remove_red_eye', opened: true,
    items: [
      {
        id: 'customers',
        name: 'CUSTOMERS',
        tooltip: 'CUSTOMERS_CONTENT',
        route: '/main/customers',
        icon: 'people'
        // ,
        // component: CardContentComponent,
        // 'component-inputs': {
        //   color:
        //   'red'
        // }
      },
      {
        id: 'accounts',
        name: 'ACCOUNTS',
        tooltip: 'ACCOUNTS_CONTENT',
        route: '/main/accounts',
        icon: 'credit_card',
        // ,
        // component: CardContentComponent,
        // 'component-inputs': {
        //   color: 'green'
        // }
      },
      {
        id: 'branches',
        name: 'BRANCHES',
        tooltip: 'BRANCHES_CONTENT',
        route: '/main/branches',
        icon: 'account_balance'
        // ,
        // component: CardContentComponent,
        // 'component-inputs': {
        //   color: 'blue'
        // }
      },
      {
        id: 'employees',
        name: 'EMPLOYEES',
        tooltip: 'EMPLOYEES_CONTENT',
        route: '/main/employees',
        icon: 'person'
        // ,
        // component: CardContentComponent,
        // 'component-inputs': {
        //   color: 'yellow'
        // }
      }
    ]
  },
  {
    id: 'general', name: 'GENERAL', icon: 'info_outline', opened: false,
    items: [
      { id: 'about', name: 'ABOUT', route: '/main/about', icon: 'help_outline' }
    ]
  }
];

export const MENU_COMPONENTS = [
  CardContentComponent
];
