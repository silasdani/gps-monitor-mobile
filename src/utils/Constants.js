import { Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const Constants = {
    sideMargin: 15,
    tabBarHeight: (Platform.OS === 'ios' && deviceHeight === 812) ? 87 : 57,
    headerHeight: 60,
    headerPadding: 20
};

Constants.innerHeight = deviceHeight - Constants.tabBarHeight - Constants.headerHeight - Constants.headerPadding;
Constants.innerWidth = deviceWidth - (2 * Constants.sideMargin);

export default Constants;
