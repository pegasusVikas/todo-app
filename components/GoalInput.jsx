import React, { useState } from 'react';
import { TextInput, Button, View, StyleSheet, Modal } from 'react-native'

export default ({ onClick,visible,cancel }) => {
    const [goal, setGoal] = useState('');

    const onChange = (text) => {
        setGoal(text)
    }
    return (
        <Modal visible={visible} >
            <View style={styles.box}>
                <TextInput
                    placeholder='type here'
                    style={styles.textinput}
                    onChangeText={onChange}
                    value={goal}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            
                            title='Add'
                            onPress={() => { onClick(goal); setGoal(''); }}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            
                            color="red"
                            title='Cancel'
                            onPress={() => { cancel(); }}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    box: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: "space-around",
        margin: 10,

    },
    textinput: {
        borderColor: 'black',
        borderBottomWidth: 2,
        padding: 5,
        width: '100%',
        marginBottom: 10
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    button: {
        width: "30%"
    }
})

