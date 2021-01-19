import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import styles from "../stylesheets/decodingMessagesStyles";
import Exit from "../components/Exit";

// convert message from data to use
// this is for the top 
function convertData(data) {
  const message = data;
  const line1 =
    message[0] ? message[0].split('') : null;
  const line2 =
    message[1] ? message[1].split('') : null;
  const line3 = 
    message[2] ? message[2].split('') : null;
  // holds gets all the letters from the message and removes spaces
  const letters = message.join("").replace(/\s/g, '').split("");
  const randomOrderLetters = [...letters].sort(() => Math.random() - 0.5);
  var i;
  
  for(i = 0; i < letters.length; i++) {
    letters[i] = {
      letter: letters[i],
      found: false,
    }
  }

  for(i = 0; i < randomOrderLetters.length; i++) {
    randomOrderLetters[i] = {
      letter: randomOrderLetters[i],
      place: i,
    }
  }
  // give each letter in the lines their respective index number in the string
  // this is one here as the index done with the map function resets on every line
  var ptr = 0;
  if(line1) {
    for(i = 0; i < line1.length; i++) {
      if(line1[i] != " ") {
        line1[i] = {
          letter: line1[i],
          place: randomOrderLetters[ptr].place,
        }
        ptr = ptr + 1;
      } else {
        line1[i] = {
          letter: " ",
          place: null,
        }
      }
    }
  }
  if(line2) {
    for(i = 0; i < line2.length; i++) {
      if(line2[i] != " ") {
        line2[i] = {
          letter: line2[i],
          place: randomOrderLetters[ptr].place,
        }
        ptr = ptr + 1;
      } else {
        line2[i] = {
          letter: " ",
          place: null,
        }
      }
    }
  }
  if(line3) {
    for(i = 0; i < line3.length; i++) {
      if(line3[i] != " ") {
        line3[i] = {
          letter: line3[i],
          place: randomOrderLetters[ptr].place,
        }
        ptr = ptr + 1;
      } else {
        line3[i] = {
          letter: " ",
          place: null,
        }
      }
  }
  }
  // will eventually randomize the contents
  // split the new randomized array into multiple array's of size 5 in order to be displayed to the user to press
  // find the number of lines needed
  var numOfLines = (letters.length % 5) + 1;
  var displayLetters = new Array(numOfLines);
  var counter = 0;
  var everyFiveCounter = 0;
  var line = [];
  for(i = 0; i < letters.length; i++) {
    if(everyFiveCounter == 5) {
      displayLetters[counter] = line;
      counter = counter + 1;
      line = [];
      everyFiveCounter = 0;
    }
    if(i == letters.length - 1) {
      line.push(
        {
          letter: randomOrderLetters[i].letter,
          display: true,
          position: randomOrderLetters[i].place,
        });
      displayLetters[counter] = line;
      counter = counter + 1;
      line = [];
      everyFiveCounter = 0;
    }
    line.push(
      {
        letter: randomOrderLetters[i].letter,
        display: true,
        position: randomOrderLetters[i].place,
      });
    everyFiveCounter = everyFiveCounter + 1;
  }
  return(
    {
      line1: line1,
      line2: line2,
      line3: line3,
      letters: letters,
      displayLetters: displayLetters,
    }
  );
}


// Letter box for the user to press
function SelectLetterBox(props) {
  return(
    <TouchableOpacity 
      style={[(props.letter.display == true) ? styles.selectLetterBoxBorder : styles.selectLetterBoxBorderHidden]}
      onPress={
        () => props.handlePress(props.letter)
      }>
      <Text style={styles.letter}>{props.letter.letter}</Text>
    </TouchableOpacity>
  );
}
// Letter box for the user to see (Top message )
function LetterBox(props) {
  return(
    <View style={styles.letterBoxContainer}>
        <View style={[(props.letter.place == props.curr) ? styles.letterBoxBorder : styles.letterBox]}>
          {
            props.letter.letter != " " &&
            <Text style={[(props.letters[props.letter.place].found == false) ? styles.hiddenLetter : styles.letter]}>{props.letter.letter}</Text>
          }
        </View>
          { props.letter.letter != " " &&
            <View style={styles.bar} />}
        <View style={styles.image}>
          { props.letter.letter != " " &&
            <Image
              source={require("../../assets/adventure/locations/alphabetItems/fruits.png")}
              style={styles.img}/>}
        </View>
    </View>
  );
}

export default function App() {
  
  function handleLetterPress(letter) {
    if(letter.letter == data.letters[currLetter].letter) {
      // if letter matches the current letter we are looking for then advance the place of currLetter
      if(currLetter == data.letters.length - 1) {
        // handle condition if the activity is over
        setCurrLetter(-1);
        console.log("done!");
      } else {
        setCurrLetter(currLetter + 1);
      }
      //determine which line that this and update the display letters to remove the correctly guessed letter
      var updated = displayLetters;
      updated[Math.floor(letter.position / 5)][letter.position - (Math.floor(letter.position / 5) * 5)].display = false;
      setDisplayLetters(updated);
      //set the found attribute for the letter 
      var foundLetter = letters;
      foundLetter[currLetter].found = true;
      setLetters(foundLetter);
    }
  }
  function handleKeyPress() {
    console.log("key pressed");
    setDisplayLetters(data.displayLetters);
    setLetters(data.letters);
    setCurrLetter(0);
  }

  // collect and configure the data when the screen is first rendered
  var data = convertData(["FOCUS", "ON THE", "POSITIVE"]);
  // hooks
  // holds the position of the current letter the user is looking for
  const [currLetter, setCurrLetter] = useState(0);
  const [letters, setLetters] = useState(data.letters);
  const [displayLetters, setDisplayLetters] = useState(data.displayLetters);

  return (
    <View style={styles.container}>
      <View style={styles.exitContainer}>
        <Exit navTo={"Modal"}/>
      </View>
      <View style={styles.messageContainer}>
          <View style={[styles.verticalCenter, {backgroundColor: "#D4E1F4", borderRadius: 12.5}]}>
            {
              data.line1 && 
              <View style={styles.lineContainer}>
                {data.line1.map((letter,index) => <LetterBox key={index} letter={letter} curr={currLetter} letters={letters}/>)}
              </View>
            }
            {
              data.line2 && 
              <View style={styles.lineContainer}>
                {data.line2.map((letter,index) => <LetterBox key={index} letter={letter} curr={currLetter} letters={letters}/>)}
              </View>
            }
            {
              data.line3 && 
              <View style={styles.lineContainer}>
                {data.line3.map((letter,index) => <LetterBox key={index} letter={letter} curr={currLetter} letters={letters}/>)}
              </View>
            }
          </View>
      </View>
      <View style={styles.lettersContainer}>
          <View style={styles.verticalCenter}>
            {
              displayLetters.map((line, index) => 
                <View key={index} style={styles.lineContainer}>
                  {
                    line.map((letter, index) => 
                      <SelectLetterBox key={index} letter={letter} handlePress={handleLetterPress}/>)
                  } 
                  </View>)
            }
          </View>
      </View>
      <View style={styles.keyContainer}> 
        <TouchableOpacity 
          style={styles.keyButton}
          onPress={
            () => handleKeyPress()
          }>
        </TouchableOpacity>
      </View>
      <View style={styles.auroraContainer}>
          <View style={styles.characterContainer}>
            <Image
              source={require('../../assets/decodingMessages/Aurora.png')}
              style={styles.aurora}/>
          </View>
          <View style={styles.textBox}>

          </View>
      </View>
    </View>
  );
}