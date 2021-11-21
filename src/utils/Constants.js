import isIphoneX from 'services/iPhoneX';
import {Dimensions} from 'react-native';

const Constants = {
  sideMargin: 15,
  tabBarHeight: isIphoneX ? 87 : 57,
  headerHeight: 60,
  headerPadding: 20
};

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

Constants.innerHeight = deviceHeight - Constants.tabBarHeight - Constants.headerHeight - Constants.headerPadding;
Constants.innerWidth = deviceWidth - (2 * Constants.sideMargin);

Constants.US_STATES = {
  AL: 'AL',
  AK: 'AK',
  AZ: 'AZ',
  AR: 'AR',
  CA: 'CA',
  CO: 'CO',
  CT: 'CT',
  DE: 'DE',
  FL: 'FL',
  GA: 'GA',
  HI: 'HI',
  ID: 'ID',
  IL: 'IL',
  IN: 'IN',
  IA: 'IA',
  KS: 'KS',
  KY: 'KY',
  LA: 'LA',
  ME: 'ME',
  MD: 'MD',
  MA: 'MA',
  MI: 'MI',
  MN: 'MN',
  MS: 'MS',
  MO: 'MO',
  MT: 'MT',
  NE: 'NE',
  NV: 'NV',
  NH: 'NH',
  NJ: 'NJ',
  NM: 'NM',
  NY: 'NY',
  NC: 'NC',
  ND: 'ND',
  OH: 'OH',
  OK: 'OK',
  OR: 'OR',
  PA: 'PA',
  RI: 'RI',
  SC: 'SC',
  SD: 'SD',
  TN: 'TN',
  TX: 'TX',
  UT: 'UT',
  VT: 'VT',
  VA: 'VA',
  WA: 'WA',
  WV: 'WV',
  WI: 'WI',
  WY: 'WY',
};

export default Constants;
