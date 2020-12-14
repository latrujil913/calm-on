import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import React, { useState } from "react";
import styles from "../stylesheets/chatPlaceholderStyles";
import { useSelector } from "react-redux";
/**
 * Figure out how to conditionally import
 */
// import { SpriteActivityData } from "../data/activityData";
import { spriteHappy } from "../data/spriteChatData";

/**
 * TODO:
 * [X] Use the navigate function out of the main function
 *    - use a string, that will be used by a switch statement to call specific fucntions
 * [X] Pass the route params out of the main function scope
 * [X] Convert all of the class methods to regular functions
 * [X] Import the styles from the milkmilk chat box
 * [ ] Obtain the last emotion entered
 * [ ] Make a tree for all emotions
 */

function findNode(answer, nxtNode) {
  return nxtNode.find((node) => node.key === answer);
}

/**
 * getEmotion: will return the last emotion the user entered if one doesnt
 *  exist the function will return a "default" string value signaling that
 *  no emotion was ever entered
 *
 * @param {object of checkins} checkinObject: checkinObject will contain
 *  all of the users checkins and returns a string value of the last emotion
 */
function getEmotion(checkinObject) {
  const journals = [];
  if (checkinObject) {
    for (const prop in checkinObject) {
      journals.push({ journals: checkinObject[prop], _id: prop, date: prop });
    }

    //Reverse journals array so the first element check-in item is the latest instead of the oldest
    journals.reverse();
    return journals[0].journals[0].mood;
  } else {
    return "default";
  }
}

function getDialogue(emotion, character) {
  if (character === "spirit") {
    switch (emotion) {
      case "sad":
        return spriteHappy;
    }
  }
}

const chatPlaceholder = ({ route, navigation: { navigate } }) => {
  const { curCharacter } = route.params;
  const img = curCharacter.img;
  const bg = curCharacter.background;
  const activitiesBtnImg = curCharacter.viewActivities;
  const charaterActivities = curCharacter.activities;
  const [question, setQuestion] = useState(spriteHappy.question);
  const [answers, setAnswers] = useState(spriteHappy.answers);
  const [nxtNode, setNxtNode] = useState(spriteHappy.nxtNode);
  const [navInfo, setNavInfo] = useState(spriteHappy.navInfo);
  const checkinObject = useSelector((state) => state.session.user.checkIns);
  const chatEmotion = getEmotion(checkinObject);
  const chatDialogue = getDialogue(chatEmotion, curCharacter.name);
  console.log(chatDialogue);

  // if (chatEmotion === "sad" && curCharacter.name) {
  //   console.log("GOOOD");
  // } else {
  //   console.log("BAAAAD");
  // }

  if (nxtNode.length === 0) {
    // FlatActivities is the default navigation
    if (navInfo === "FlatActivities") {
      navigate("FlatActivities", {
        activities: charaterActivities,
        headerColor: curCharacter.characterColor,
      });
    } else {
      navigate(navInfo.introPageData.navRoute, {
        name: navInfo.title,
        actNav: navInfo.introPageData.ActRoute,
        about: navInfo.introPageData.about,
        helpful: navInfo.introPageData.helpful,
        img: navInfo.introPageData.img,
        headerColor: curCharacter.characterColor,
      });
    }
  }

  function traverseTree(answers) {
    const newNode = findNode(answers, nxtNode);

    setNavInfo(() => newNode.navInfo);
    setQuestion(() => newNode.question);
    setAnswers(() => newNode.answers);
    setNxtNode(() => newNode.nxtNode);
  }

  return (
    <ImageBackground style={styles.background} source={bg}>
      <Image style={styles.chosenCharacter} source={img} />
      <View style={styles.activityBtnContainer}>
        <TouchableOpacity
          style={styles.activityBtn}
          onPress={() =>
            navigate("FlatActivities", {
              activities: charaterActivities,
              headerColor: curCharacter.characterColor,
            })
          }
        >
          <Image source={activitiesBtnImg} />
        </TouchableOpacity>
      </View>
      <View style={styles.box}>
        <View
          style={[styles.top, { backgroundColor: curCharacter.characterColor }]}
        >
          <Text style={styles.question}>{question}</Text>
        </View>
        <View style={styles.bottom}>
          {answers.map((a, i) => {
            return (
              <TouchableOpacity
                key={i}
                style={[
                  styles.answer,
                  { borderColor: curCharacter.characterColor },
                ]}
                onPress={() => {
                  traverseTree(a);
                  navInfo ? navigate(navInfo) : null;
                }}
              >
                <Text key={i} style={styles.a}>
                  {a}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </ImageBackground>
  );
};

export default chatPlaceholder;
