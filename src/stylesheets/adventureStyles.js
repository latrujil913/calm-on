import { StyleSheet } from "react-native";
import { windowWidth } from "../util/windowDimensions";

export default StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  imgPosition: {
    marginLeft: -50,
  },
  greetingTxt: {
    color: "white",
    fontFamily: "FontBold",
    fontSize: windowWidth * 0.04,
  },
  row: {
    flexDirection: "row",
  },
  locationContainer: {
    height: 0.2333 * windowWidth,
    width: 0.2333 * windowWidth,
    margin: "5%",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9AE7FF",
  },
  dialogContainer: {
    height: "30%",
    width: "90%",
    borderRadius: 10,
    backgroundColor: "#027E2A",
    justifyContent: "center",
    paddingHorizontal: "5.5%",
  },
  locationTxt: {
    marginTop: 5,
    textAlign: "center",
    fontFamily: "FontBold",
    fontSize: windowWidth * 0.03,
  },
  exitPosition: {
    marginTop: "12.5%",
    marginLeft: "5%",
  },
  center: {
    marginTop: "15%",
    alignItems: "center",
  },
  background: {
    width: "100%",
    height: "100%",
  },
});
