const ROUTES = [
  {
    name: '시장',
    path: '/markets',
    subNav: [
      {
        name: '지수',
        path: '/equities',
      },
      {
        name: '주식',
        path: '/stocks',
      },
      {
        name: '외환',
        path: '/currecies',
      },
      {
        name: '암호화폐',
        path: '/crypto',
      },
    ],
  },
  {
    name: '뉴스',
    path: '/news',
    subNav: [
      {
        name: '경제',
        path: '/economy',
      },
      {
        name: '주식 시장',
        path: '/stock-markets',
      },
      {
        name: '상품과 선물',
        path: '/commodities',
      },
      {
        name: '외환',
        path: '/currecies',
      },
      {
        name: '암호화폐',
        path: '/crypto',
      },
      {
        name: '일반',
        path: '/general',
      },
    ],
  },
]

export default ROUTES
