import { StyleSheet, Dimensions } from 'react-native';

const deviceSize = Dimensions.get('window');
export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#FFA513',
    },
    image: {
        height: deviceSize.height / 4,
        width: deviceSize.width - 20,
        resizeMode: 'contain',
        flex: 1,
    },
    inner_container: {
        position: 'absolute',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    info_container: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        width: deviceSize.width - 20,
        padding: 10,
        alignItems: 'flex-end',
    },
    title: {
        fontSize: 26,
        color: '#fff',
        fontWeight: '900',
    },
});