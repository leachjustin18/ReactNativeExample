import React from 'react';
import {AppRegistry, Text} from 'react-native';

class ReactNativeExample extends React.Component {
    render() {
        return (
          <Text>
              Hello World
          </Text>
        );
    }
}

export default ReactNativeExample;

AppRegistry.registerComponent('ReactNativeExample', () => ReactNativeExample);
