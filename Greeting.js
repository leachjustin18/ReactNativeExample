import React from 'react';
import {Text} from 'react-native';

const Greeting = (props) => {
    const {name} = props;
    return (
        <Text>
            Hello from {name}!
        </Text>
    );
};

export default Greeting;