export interface IDailyMenuDatItem {
  isOpen: boolean;
  day: { dayName: string; date: string };
  menuItems: { name: string; description?: string; price: number }[];
}

export const dailyMenuData = [
  {
    isOpen: true,
    day: {
      dayName: 'Pondělí',
      date: '12.2.2024',
    },
    menuItems: [
      {
        name: 'Noky s kuřetem',
        description: 'Špenát, parmazán, smetanová omáčka',
        price: 155,
      },
      {
        name: 'Hovězí roláda s těstovinami',
        price: 159,
      },
      {
        name: 'Smažený květák',
        description: 'Vařené brambory, tatarka',
        price: 149,
      },
    ],
  },
  {
    isOpen: true,
    day: {
      dayName: 'Úterý',
      date: '13.2.2024',
    },
    menuItems: [
      {
        name: 'Kuřecí kari',
        description: 'Basmati rýže, naan chléb',
        price: 169,
      },
      {
        name: 'Zeleninový wok',
        description: 'Jasmínová rýže, sójová omáčka',
        price: 149,
      },
      {
        name: 'Pečená kachna',
        price: 179,
      },
    ],
  },
  {
    isOpen: false,
    day: {
      dayName: 'Středa',
      date: '14.2.2024',
    },
    menuItems: [
      {
        name: 'Spaghetti Bolognese',
        description: 'Mleté hovězí maso, rajčatová omáčka',
        price: 159,
      },
      {
        name: 'Grilovaný losos',
        description: 'Vařená zelenina, citronový máslový dresing',
        price: 179,
      },
      {
        name: 'Vegetariánský burger',
        price: 149,
      },
    ],
  },
  {
    isOpen: true,
    day: {
      dayName: 'Čtvrtek',
      date: '15.2.2024',
    },
    menuItems: [
      {
        name: 'Houbové risotto',
        description: 'Sušené hříbky, parmazán',
        price: 159,
      },
      {
        name: 'Vepřový řízek',
        description: 'Hranolky, brusinková omáčka',
        price: 169,
      },
      {
        name: 'Smažený sýr',
        description: 'Hranolky, tatarská omáčka',
        price: 139,
      },
    ],
  },
  {
    isOpen: true,
    day: {
      dayName: 'Pátek',
      date: '16.2.2024',
    },
    menuItems: [
      {
        name: 'Rybí filé s hranolkami',
        description: 'Pivem smažený treska, hrachový pyré',
        price: 169,
      },
      {
        name: 'Zeleninová lasagne',
        description: 'Vrstvy těstovin, různá zelenina',
        price: 159,
      },
      {
        name: 'Sushi set',
        price: 179,
      },
    ],
  },
];
