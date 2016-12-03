import React from 'react';
import {AppRegistry, Text, TextInput, ScrollView, ListView} from 'react-native';

import Greeting from './Greeting';


class ReactNativeExample extends React.Component {
    // Initialize the hardcoded data
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
            ])
        };
    }

    render() {
        return (
         <ScrollView>
             <Greeting
                 name="You"
             />
             <ListView
                 dataSource={this.state.dataSource}
                 renderRow={(rowData) => <Text>{rowData}</Text>}
             />
         </ScrollView>
        );
    }
}

AppRegistry.registerComponent('ReactNativeExample', () => ReactNativeExample);
