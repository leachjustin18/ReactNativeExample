import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 60,
        padding: 16
    },

    textInput: {
        borderBottomWidth: 1,
        borderColor: '#ccc',
        paddingLeft: 5,
        paddingRight: 5
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