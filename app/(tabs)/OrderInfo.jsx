import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function OrderInfo() {
    return (
        <View>
            <View style={styles.orderInfoContainer}>
                <Text style={styles.orderId}>Order</Text>
                <Text style={styles.orderIdX}>Id: #7806-761981-0140</Text>
                <Text style={styles.orderDate}>Placed</Text>
                <Text style={styles.orderIdX}>At: Aug 20, 2024, 3:02 PM</Text>
            </View>
            <Text style={styles.helpHeader}>Need Help?</Text>
            <View style={styles.helpBox}>
                <Text style={styles.helpText}>Reach us on WhatsApp</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    orderInfoContainer: {
        marginVertical: 20,
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.1, 
        shadowRadius: 4, 
        elevation: 5,
    },
    orderId: {
        fontSize: 14,
        marginBottom: 5,
    },
    orderIdX: {
        fontSize: 14,
        marginBottom: 5,
        color: '#A9A9A9',
    },
    orderDate: {
        fontSize: 14,
        marginBottom: 5,
    },
    helpHeader: {
        fontSize: 16,
        fontWeight: '600',
        marginTop: 10,
        marginBottom: 10,
    },
    helpBox: {
        padding: 15,
        backgroundColor: '#fdfdfd', 
        borderRadius: 8,
        marginBottom: 20,
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.1, 
        shadowRadius: 4, 
        elevation: 5, // Android
    },
    helpText: {
        fontWeight: '600',
    },
    
});
