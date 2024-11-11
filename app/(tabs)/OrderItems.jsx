import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';

// veg and non-veg image :
const foodImages = {
    "nonVegSymbol.png": require('../../assets/main/nonVegSymbol.png'),
    "vegSymbol.png": require('../../assets/main/vegSymbol.png'),
};

export default function OrderItems({ foodItems = [] }) { 
    return (
        <SafeAreaView>
            <Text style={styles.sectionHeader}>Order Items</Text>
            
            <View style={styles.sectionContainer}>
                {
                    foodItems.map((item, index) => (
                        <View key={item.id} style={styles.itemRow}>
                            <View style={styles.itemDetails}>
                                <Image 
                                    source={foodImages[item.image.split('/').pop()]} 
                                    style={styles.itemImage}
                                />
                                <Text style={styles.itemText}>{item.itemName} x1</Text>
                            </View>

                                {/* Original price striked and discounted price : */}
                            <View>
                                <Text style={[styles.itemPrice, styles.strikethrough]}>₹{item.price}</Text> 
                                <Text style={[styles.itemPrice, styles.discountedPrice]}>
                                    ₹{item.price - (index === 0 ? 50 : index === 1 ? 20 : index === 2 ? 10 : 0)} 
                                </Text>
                            </View>
                        </View>
                    ))
                }
            </View>
        </SafeAreaView>
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
        marginTop: 15,
        marginBottom: 1,
    },
    itemRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 3,
        elevation: 1,
    },
    itemDetails: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemImage: {
        width: 20,  
        height: 20, 
        marginRight: 10,
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
        marginLeft : 10,
        textDecorationLine: 'line-through',
        color: '#999',
        fontSize: 12,
    },
    discountedPrice: {
        marginLeft: 5,
    },
    totalContainer: {
        marginTop: 20,
        paddingVertical: 10,
        alignItems: 'center',
    },
    totalText: {
        fontSize: 18,
        fontWeight: '700',
        color: '#333',
    },
    noItemsText: {
        fontSize: 14,
        color: '#999',
        textAlign: 'center',
        marginVertical: 10,
    },
});