import React from "react";
import { View, Image, Text, StyleSheet, SafeAreaView } from "react-native";

export default function OSH() {
  return (
    <SafeAreaView>
      <View style={styles.progressContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Order Status</Text>
          <Image
            source={require("../../assets/main/SwishLogo.png")}
            style={styles.logo}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  progressContainer: {
    alignItems: "center",
    marginVertical: 0, // MT and MB
    backgroundColor: "#30c263",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  header: {
    alignItems: "center",
    paddingVertical: 10,
  },
  headerText: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 20,
  },
  logo: {
    width: 300,
    height: 80,
    resizeMode: "contain",
    marginTop: 0,
    marginBottom: 0,
    paddingBottom: 0,
  },
});
