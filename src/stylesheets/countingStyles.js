import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#39565F",
    //alignItems: "center"
  },
  backImage: {
    width: "100%",
    height: "100%",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  fruitZone: {
    position: "absolute",
    marginLeft: 10,
    marginRight: 10,
    top: 200,
    width: 400,
    height: 360,
    //backgroundColor: "black",
  },
  fruit: {
    position: "absolute",
    width: 31,
    height: 36,
  },
  sprit: {
    position: "absolute",
    width: 116,
    height: 213,
    marginLeft: -20,
    //marginTop: 13,
  },
  spritBox: {
    position: "absolute",
    marginLeft: 10,
    marginRight: 10,
    top: 575,
    width: 300,
    height: 200,
    //backgroundColor: "blue",
  },
  spritBox2: {
    position: "absolute",
    marginLeft: 10,
    marginRight: 10,
    top: 300,
    width: 300,
    height: 200,
    //backgroundColor: "blue",
  },
  spritBox3: {
    position: "absolute",
    marginLeft: 10,
    marginRight: 10,
    top: 300,
    width: 300,
    height: 200,
    //backgroundColor: "blue",
    alignItems: "flex-end",
  },
  textBox: {
    position: "absolute",
    top: 775,
    height: 82,
    width: 300,
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#3B96B3",
    alignItems: "center",
    justifyContent: "center",
  },
  textBox2: {
    height: 82,
    width: 300,
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#3B96B3",
    alignItems: "center",
    justifyContent: "center",
  },
  itemBoxes: {
    position: "absolute",
    width: 330,
    height: 47,
    top: 130,
    left: 40,
    //backgroundColor: "#DCF4F1",
  },
  itemBox: {
    height: 48,
    width: 47,
    //borderColor: "#39565F",
    alignItems: "center",
    justifyContent: "center",
    //borderWidth: 1,
    backgroundColor: "#DCF4F1",
    margin: 1,
  },
  boxImg: {
    height: 40,
    width: 40,
    //margin: 10,
    resizeMode: "contain",
  },
  countDis: {
    position: "absolute",
    height: 30,
    width: 100,
    top: 100,
    //backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  recpImgBox: {
    height: 150,
    width: 200,
    left: 90,
    top: 50,
    alignItems: "center",
    justifyContent: "center",
    //backgroundColor: "green",
  },
  groupImg: {
    resizeMode: "contain",
  },
  nextButton: {
    width: 163,
    height: 51,
    borderRadius: 41,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
  },
  buttonView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 350,
    height: 51,
    marginTop: 60,
    //backgroundColor: "blue",
  },
  navButton: {
    width: 163,
    height: 51,
    borderRadius: 41,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  fin: {
    width: 350,
    height: 300,
    //backgroundColor: "black",
    marginBottom: 95,
    alignItems: "center",
  },
});
