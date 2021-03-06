import React from "react";
import { Text, View, ImageBackground, Image, ScrollView } from "react-native";
import styles from "../stylesheets/adventureLocationAllStyles.js";
import Exit from "../components/Exit";

/**
 * Displays all of the selected items sent from the AdventureLocation activity
 */
export default AdventureLocationSeeAll = ({ route }) => {
  const { arr } = route.params;
  const { bg } = route.params;
  return (
    <ImageBackground source={bg} style={styles.background}>
      <View style={styles.exitContainer}>
        <Exit
          height={21}
          width={12}
          img={require("../../assets/kpi/chevronLeft.png")}
        />
      </View>
      <Text style={styles.selectedItemsTxt}>Selected Items</Text>
      <ScrollView contentContainerStyle={styles.allSelectedContainer}>
        {arr.map((item) => {
          return (
            <View key={item.name} style={styles.itemContainer}>
              <Image source={item.img} style={styles.imgContainer} />
              <Text style={styles.itemsTxt}>{item.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </ImageBackground>
  );
};
