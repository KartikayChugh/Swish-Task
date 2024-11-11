import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProgressBar() {
    return (
        <View style={styles.progressContainer}>
            <View style={styles.line} />
            <View style={styles.stepContainer}>
                <View style={styles.step}>
                    <View style={[styles.circle, styles.activeCircle]} />
                    <Text style={styles.label}>Preparing</Text>
                </View>
                <View style={styles.step}>
                    <View style={styles.circle} />
                    <Text style={styles.label}>On the way</Text>
                </View>
                <View style={styles.step}>
                    <View style={styles.circle} />
                    <Text style={styles.label}>Delivered</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    progressContainer: {
        alignItems: 'center',
        marginVertical: 0,
        padding: 20,
    },
    line: {
        position: 'absolute',
        top: 29,
        left: 50,
        right: 30,
        height: 3,
        backgroundColor: '#ffffff',
        zIndex: -1,
    },
    stepContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    step: {
        alignItems: 'center',
    },
    circle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: '#ffffff',
    },
    activeCircle: {
        backgroundColor: '#30c263',
        borderWidth: 2,
        borderColor: '#ffffff',
    },
    label: {
        color: '#ffffff',
        marginTop: 5,
        fontSize: 12,
    },
});
