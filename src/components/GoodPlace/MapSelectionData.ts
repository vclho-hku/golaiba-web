const RegionList = [
  {
    id: 1,
    section: '新界',
    regions: [
      '沙田',
      '屯門',
      '元朗',
      '天水圍',
      '青衣',
      '粉嶺',
      '西貢',
      '馬鞍山',
      '將軍澳',
    ],
  },
  {
    id: 2,
    section: '九龍',
    regions: [
      '深水埗',
      '旺角',
      '佐敦',
      '尖沙咀',
      '紅磡',
      '太子',
      '美孚',
      '荔枝角',
    ],
  },
  {
    id: 2,
    section: '香港島',
    regions: [
      '堅利地城',
      '北角',
      '銅鑼灣',
      '中環',
      '上環',
      '金鐘',
      '灣仔',
      '側魚涌',
    ],
  },
];

const PlaceFilterList = ['書店', '圖書館', '自修室', '咖啡店', '公園'];

const PlacesList = [
  {
    id: 1,
    section: '香港島',
    places: [
      {
        id: 1,
        name: '香港中央圖書館',
        lat: '22.28032641397895',
        lng: '114.1895094257469',
        address: '銅鑼灣高士威道66號香港中央圖書館',
        openingHour: '10:00',
        closingHour: '20:00',
      },
      {
        id: 2,
        name: '誠品生活太古店',
        lat: '22.286209490547392',
        lng: '114.21769165957826',
        address: '香港太古城道18號太古城中心G/F 74鋪及1/F 144鋪',
        openingHour: '10:00',
        closingHour: '22:00',
      },
    ],
  },
  {
    id: 2,
    section: '九龍',
    places: [
      {
        id: 3,
        name: '九龍公共圖書館',
        lat: '22.318558760629255',
        lng: '114.17604868190152',
        address: '何文田培正道5號九龍公共圖書館',
        openingHour: '10:00',
        closingHour: '20:00',
      },
      {
        id: 4,
        name: '誠品生活尖沙咀店',
        lat: '22.29474210183847',
        lng: '114.16885468375536',
        address: '香港尖沙咀梳士巴利道3號星光行2/F-3/F',
        openingHour: '10:00',
        closingHour: '22:00',
      },
    ],
  },
  {
    id: 3,
    section: '新界',
    places: [
      {
        id: 5,
        name: '青衣公共圖書館',
        lat: '22.354237969001026',
        lng: '114.10631470703008',
        address: '青衣青綠街38號青衣市政大廈1樓',
        openingHour: '10:00',
        closingHour: '20:00',
      },
      {
        id: 6,
        name: '荃灣公共圖書館',
        lat: '22.375207014284722',
        lng: '114.11564635392625',
        address: '荃灣西樓角路38號',
        openingHour: '10:00',
        closingHour: '20:00',
      },
      {
        id: 7,
        name: '誠品書店奧運店',
        lat: '22.317710978965064',
        lng: '114.16479607121512',
        address: '九龍大角咀奧海城三期地下高層UG55-58, 80-88號舖',
        openingHour: '10:00',
        closingHour: '22:00',
      },
    ],
  },
];

export { RegionList, PlaceFilterList, PlacesList };
