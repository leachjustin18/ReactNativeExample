import React, {Component} from 'react';
import ReactNative from 'react-native';
const {
    TouchableHighlight,
    Text,
    NavigatorIOS
} = ReactNative;

import ContactListView from './ContactListView'

class Contacts extends Component {
    _handleNavigationRequest() {
        this.refs.nav.push({
            component: MyView,
            title: 'Add',
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
            <ContactListView />
        );
    }
}


export  default Contacts;