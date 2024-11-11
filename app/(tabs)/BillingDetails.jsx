
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function BillingDetails({ foodItems = [], totalBill }) {
    const deliveryCharge = 30; // Initial delivery crg

    // Individual discounts : 
    const discount1 = 50; 
    const discount2 = 20; 
    const discount3 = 10; 

    const discountedSubtotal = foodItems.reduce((total, item, index) => {
        let discount = 0;
        if (index === 0) discount = discount1;
        if (index === 1) discount = discount2;
        if (index === 2) discount = discount3;
        return total + (item.price - discount);
    }, 0);

    const discountedDeliveryCharge = 0; 
    const totalToPay = discountedSubtotal + discountedDeliveryCharge; 
    const savings = discount1 + discount2 + discount3 + deliveryCharge; 

    return (
        <View>
            <Text style={styles.sectionHeader}>Billing Details</Text>
            <View style={styles.sectionContainer}>
                {/* Subtotal */}
                <View style={[styles.itemRow, styles.lastItem]}>
                    <Text style={styles.itemText}>Subtotal</Text>
                    <Text style={styles.itemPrice}>₹{discountedSubtotal}</Text>
                </View>

                {/* Horizontal line separatoor :*/}
                <View style={styles.separator} />

                {/* Delivery Charge (₹30 -> ₹0) : */}
                <View style={styles.itemRow}>
                    <Text style={styles.itemText}>Delivery</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={[styles.itemPrice, styles.strikethrough]}>₹{deliveryCharge}</Text>
                        <Text style={[styles.itemPrice, styles.discountedPrice]}>₹{discountedDeliveryCharge}</Text>
                    </View>
                </View>

                {/* Total to Pay : */}
                <View style={[styles.itemRow, styles.lastItem]}>
                    <Text style={styles.itemText}>To Pay</Text>
                    <Text style={[styles.itemPrice, styles.greenText]}>₹{totalToPay}</Text>
                </View>
            </View>

            {/* Total saved box : */}
            <View style={styles.savingsBox}>
                <Text style={styles.savingsText}>Total saved on this order ₹{savings}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        marginVertical: 15,
        paddingVertical: 10,
        backgroundColor: '#fff', 
        borderRadius: 8,
        paddingHorizontal: 15,
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },
    sectionHeader: {
        fontSize: 16,
        fontWeight: '600',
        marginTop: 10,
        marginBottom: 10,
    },
    itemRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5,
        width: '100%',
        borderBottomWidth: 1,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 3,
        elevation: 1,
    },
    separator: {
        height: 1,
        backgroundColor: '#ddd',
        marginVertical: 5,
    },
    lastItem: {
        borderBottomWidth: 0,
    },
    itemText: {
        fontSize: 14,
        color: '#333',
    },
    itemPrice: {
        fontSize: 14,
        color: '#333',
    },
    strikethrough: {
        textDecorationLine: 'line-through',
        color: '#A9A9A9',
        marginRight: 5, 
    },
    discountedPrice: {
        color: '#333',
        fontWeight: 'bold',
    },
    greenText: {
        color: '#30c263', 
    },
    savingsBox: {
        marginTop: 15,
        padding: 10,
        backgroundColor: '#e9f8e3', 
        borderColor: '#30c263', 
        borderWidth: 1, 
        borderRadius: 8, 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.1, 
        shadowRadius: 4, 
        elevation: 5, 
    },
    savingsText: {
        color: '#30c263',
        fontSize: 14,
        fontWeight: '500',
        textAlign: 'center', 
    },
});
