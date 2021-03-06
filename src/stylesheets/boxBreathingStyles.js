import { StyleSheet } from "react-native";
import hex from "./hexCodes";
import {
  horizontalLength,
  horizontalPosition,
  bottomPosition,
  topPosition,
} from "../util/boxBreathingMeasurements";

const styles = StyleSheet.create({
  exitPosition: {
    marginTop: "12.5%",
    marginLeft: "5%",
  },
  numText: {
    color: "#064B5B",
    position: "absolute",
    color: hex.blue.blue5,
    top: bottomPosition - bottomPosition * 0.5,
    //borderWidth:1,
  },
  text: {
    position: "absolute",
    top: bottomPosition - bottomPosition * 0.57,
    fontFamily: "FontReg",
    //borderWidth:1,
  },
  introText: {
    position: "absolute",
    top: bottomPosition - bottomPosition * 0.45,
  },
  animatedText: {
    color: hex.blue.blue5,
    fontSize: 120,
    fontFamily: "FontReg",
    textAlign: "center",
  },
  animatedText2: {
    color: hex.blue.blue5,
    fontSize: 30,
    fontFamily: "FontBold",
    textAlign: "center",
  },
  questionBox: {
    backgroundColor: hex.green.green1,
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    padding: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    fontFamily: "FontReg",
  },
  answers: {
    width: "85%",
    textAlign: "center",
    backgroundColor: "white",
    marginTop: "2%",
    marginLeft: "7%",
    marginTop: "7%",
    borderRadius: 25,
    borderWidth: 3,
    borderColor: hex.green.green1,
    paddingBottom: 8,
    paddingTop: 10,
    fontWeight: "800",
  },
  introContainer: {
    justifyContent: "center",
    alignContent: "center",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
  },
  prompt: {
    backgroundColor: hex.white.white1,
    width: "75%",
    marginTop: bottomPosition + bottomPosition * 0.14,
    marginLeft: "12.5%",
    borderRadius: 10,
    paddingBottom: "5%",
  },
  outroPromt: {
    backgroundColor: "#FBBDB4",
    width: "75%",
    marginLeft: "12.5%",
    borderRadius: 10,
    paddingBottom: "5%",
  },
  bottomFrame: {
    position: "absolute",
    top: bottomPosition,
    left: horizontalPosition,
    borderWidth: 10,
    width: horizontalLength,
    //borderColor:'red',
    borderColor: hex.blue.blue4,
    zIndex: 0,
  },

  coverLeft: {
    position: "absolute",
    top: topPosition,
    left: horizontalPosition,
    borderWidth: 10,
    height: horizontalLength,
    borderColor: hex.blue.blue4,
    zIndex: 0,
  },
  barRight: {
    position: "absolute",
    top: topPosition,
    right: horizontalPosition,
    width: 10,
    borderWidth: 10,
    borderColor: hex.blue.blue5,
    height: horizontalLength,
  },
  barTop: {
    position: "absolute",
    top: topPosition,
    left: horizontalPosition,
    width: horizontalLength,
    borderWidth: 10,
    borderColor: hex.blue.blue5,
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  stats: {
    fontSize: 20,
    textAlign: "center",
    marginTop: "2%",
  },
  statType: {
    textAlign: "center",
    color: hex.green.green1,
    width: 125,
    marginBottom: "5%",
  },
  statsRow: {
    marginTop: "5%",
    flexDirection: "row",
    marginLeft: "-2%",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
  },
  startText: {
    textAlign: "center",
    fontSize: 18,
    color: "white",
  },
  start: {
    display: "flex",
    height: 50,
    width: 250,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: hex.green.green1,
    marginTop: "10%",
    marginLeft: "15%",
  },
  er: {
    height: "40%",
  },
  lower: {
    backgroundColor: "white",
    height: "60%",
    width: "100%",
    paddingLeft: "5%",
    paddingTop: "8%",
  },
  sectionTitle: {
    fontSize: 20,
    paddingTop: "5%",
  },
  descriptions: {
    color: hex.grey.grey1,
    paddingTop: "2%",
  },
  questionText: {
    color: "white",
    textAlign: "center",
    fontFamily: "FontReg",
  },
  answerText: {
    textAlign: "center",
    fontFamily: "FontReg",
  },
  exitBtn: {
    position: "absolute",
    top: "5%",
    left: "5%",
    zIndex: 14,
  },
  spriteIcon: {
    position: "absolute",
    zIndex: 5,
  },
  introStory: {
    position: "absolute",
    top: 20,
    zIndex: 12,
  },
  outroImgContainer: {
    width: "40%",
    height: "30%",
    marginTop: "30%",
    marginBottom: -10,
    marginLeft: "15%",
    //backgroundColor: "yellow",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  outroImg: {
    height: '100%',
    width: '100%',
    resizeMode: "contain",
    //backgroundColor: "green",
  },
});

export default styles;
