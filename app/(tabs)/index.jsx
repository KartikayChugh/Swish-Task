import React, { useState, useEffect } from 'react';
import { ScrollView, View, StyleSheet, Image } from 'react-native';
import ProgressBar from './ProgressBar';
import OSH from './OrderStatusHeader';
import DeliveryStatus from './DeliveryStatus';
import DeliveryAddress from './DeliveryAddress';
import OrderItems from './OrderItems';
import BillingDetails from './BillingDetails';
import OrderInfo from './OrderInfo';
import constants from './data/constants.json';

export default function OrderTrackingScreen() {
  const [foodItems, setFoodItems] = useState(constants.foodItems);
  const [totalBill, setTotalBill] = useState(0); 

  // Calculate the total bill :
  useEffect(() => {
    const total = foodItems.reduce((sum, item) => sum + item.price, 0);
    // 
    setTotalBill(total);
  }, [foodItems]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.hh}>
        {/* Order Status Header + Logo */}
        <OSH />

        {/* Progress Bar */}
        <ProgressBar />
      </View>

      {/* SwishX Image */}
      <Image source={require('../../assets/main/SwishX.png')} style={styles.logo} />

      {/* Delivery Status */}
      <DeliveryStatus />

      {/* Delivery Address */}
      <DeliveryAddress />

      {/* Pass foodItems and totalBill */}
      <OrderItems foodItems={foodItems} totalBill={totalBill} />

      {/* Pass foodItems and totalBill */}
      <BillingDetails foodItems={foodItems} totalBill={totalBill} />

      {/* Order ID and Help */}
      <OrderInfo />
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  hh: {
    alignItems: 'center',
    backgroundColor: '#30c263',
    marginBottom: 0,             
    paddingBottom: 0,           
  },
  logo: {
    width: 350,
    height: 20,
    marginTop: 0,               
  },
});