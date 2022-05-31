export const mockMenuItemsData = (): any[] => {
  return [
    {
      label: 'Home',
      routerLink: ['../inicio'],
      default: true,
      visible: true,
      url: '#',
      icon: 'mdi mdi-home',
      id: '1',
      order: '1',
      type: 'Vista',
      submenu: [
        {
          label: 'Home',
          icon: 'mdi mdi-gauge',
          routerLink: ['/main/dashboard'],
        },
      ],
    },
    {
      label: 'Products',
      routerLink: ['../inicio'],
      default: true,
      visible: true,
      url: '#',
      icon: 'mdi mdi-archive',
      id: '2',
      order: '2',
      type: 'Vista',
      submenu: [
        {
          label: 'Registry',
          icon: 'mdi mdi-gauge',
          routerLink: ['./administracion-usuarios'],
        },
        // {
        //   label: 'Requests Registration',
        //   icon: 'mdi mdi-gauge',
        //   routerLink: ['./administracion-solicitudes'],
        // },
      ],
    },
    // {
    //   label: 'Records',
    //   routerLink: ['../inicio'],
    //   default: true,
    //   visible: true,
    //   url: '#',
    //   icon: 'mdi mdi-archive',
    //   id: '2',
    //   order: '2',
    //   type: 'Vista',
    //   submenu: [
    //     {
    //       label: 'Registry',
    //       icon: 'mdi mdi-gauge',
    //       routerLink: ['./expedientes'],
    //     },
    //     {
    //       label: 'Historical',
    //       icon: 'mdi mdi-gauge',
    //       routerLink: ['./administracion-solicitudes'],
    //     },
    //   ],
    // },
    // {
    //   label: 'Setting',
    //   routerLink: ['../inicio'],
    //   default: true,
    //   visible: true,
    //   url: '#',
    //   icon: 'mdi mdi-settings',
    //   id: '3',
    //   order: '3',
    //   type: 'Vista',
    //   submenu: [
    //     {
    //       label: 'Roles',
    //       icon: 'mdi mdi-gauge',
    //       routerLink: ['./registro-de-roles'],
    //     },
    //   ],
    // },
  ];
};
