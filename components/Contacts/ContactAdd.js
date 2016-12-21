import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 60,
        padding: '16px 0 16px 16px'
    },

    textInput: {
        borderBottom: 1,
        borderColor: '#ccc',
        padding: '0 5px '
    }
});


class ContactAdd extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text) => this.setState({text})}
                    placeholder="First Name"
                />
            </View>
        );
    }
}

export default ContactAdd;