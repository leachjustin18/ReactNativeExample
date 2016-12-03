import React, {Component} from 'react';

import ReactNative from 'react-native';
const {
    TouchableHighlight,
    Text,
    NavigatorIOS
} = ReactNative;

class Contacts extends Component {
    _handleNavigationRequest() {
        this.refs.nav.push({
            component: MyView,
            title: 'Genius',
            passProps: { myProp: 'genius' },
        });
    }

    render() {
        return (
            <NavigatorIOS
                ref='nav'
                initialRoute={{
          component: MyView,
          title: 'Contacts',
          passProps: { myProp: 'foo' },
          rightButtonTitle: 'Add',
          onRightButtonPress: () => this._handleNavigationRequest(),
        }}
                style={{flex: 1}}
            />
        );
    }
}

class MyView extends Component {
    render() {
        return(
                <Text style={{marginTop: 100, alignSelf: 'center'}}>
                    See you on the other nav {this.props.myProp}!
                </Text>
        );
    }
}


export  default Contacts;