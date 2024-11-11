import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DeliveryStatus() {
    return (
        <View style={styles.statusContainer}>
            <View style={styles.statusBox}>
                <Text style={styles.statusText}>Delivered</Text>
            </View>
            <Text style={styles.arrivalTime}>
                Arrived in just <Text style={styles.highlightedText}>4 mins 38 secs ⚡</Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    statusContainer: {
        alignItems: 'center',
        marginVertical: 20,
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.1, 
        shadowRadius: 4, 
        elevation: 5,
    },
    statusBox: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#FFFFFF', 
        borderRadius: 8,
        marginBottom: 5,
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.1, 
        shadowRadius: 4, 
        elevation: 3, 
    },
    statusText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333', 
    },
    arrivalTime: {
        fontSize: 14,
        color: '#888',
        marginTop: 5, 
    },
    highlightedText: {
        color: '#30c263',
        fontWeight: 'bold',
    },
});
