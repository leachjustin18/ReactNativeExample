import React, {Component} from 'react';
import ReactNative from 'react-native';
import ContactAdd from './ContactAdd';

const {
    TouchableHighlight,
    Text,
    NavigatorIOS
} = ReactNative;

import ContactListView from './ContactListView'

class Contacts extends Component {
    _handleNavigationRequest() {
        this.refs.nav.push({
            component: ContactAdd,
            title: 'Add Contact',

        });
    }

    render() {
        return (
            <NavigatorIOS
                ref='nav'
                initialRoute={{
          component: MyView,
          title: 'Contacts',
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