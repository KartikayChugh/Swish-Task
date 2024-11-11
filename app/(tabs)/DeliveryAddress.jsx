import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DeliveryAddress() {
    return (
        <View style={styles.addressContainer}>
            <Text style={styles.addressHeader}>Delivering to</Text>
            <Text style={styles.addressText}>Swish | 40, 14th Main Rd, next to...</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    addressContainer: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderWidth: 1, 
        borderColor: '#ddd', 
        borderRadius: 8, 
        backgroundColor: '#f9f9f9', 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1, 
        shadowRadius: 4, 
        elevation: 5, 
    },
    addressHeader: {
        color: '#30c263',
        marginBottom: 5, 
    },
    addressText: {
        fontSize: 14,
        fontWeight: '600',
    },
});
