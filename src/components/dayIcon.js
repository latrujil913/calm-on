import React, { useEffect } from "react";
import {Image,View} from "react-native";
import Text from "./Text";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "../stylesheets/dayIconStyles"
import hex from "../stylesheets/hexCodes";

/**
 * Contains all images associated with each emotion
 */
const moodMap = {
    happy: {path:require("../../assets/preview/happy.png"), color: hex.yellow.happy},
    angry: {path:require("../../assets/preview/angry.png"), color: hex.pink.angry},
    sad: {path:require("../../assets/preview/sad.png"), color: hex.purple.sad},
    scared: {path:require("../../assets/preview/scared.png"), color: hex.blue.scared},
    excited: {path:require("../../assets/preview/excited.png"), color: hex.green.excited},
    worried: {path:require("../../assets/preview/worried.png"), color: hex.brown.worried}
}

/**
 * Used in (monthlyPreview.js) Monthly Preivew for displaying each date and its emojis
 * @param checkIn A single checkIn of the day
 * @param showJournal function used to open up the detailed view of the check-in
 */
export default DayIcon =({checkIn,showJournal})=>{
    
    return(
        <View>
        {checkIn.journals?
        <TouchableOpacity onPress = {()=>showJournal()} style = {styles.container}>
           <Text style = {styles.header}>{checkIn.day}{`\n`}
            <Text >{checkIn.DOW.slice(0,3)}</Text>
           </Text>
           <View style = {styles.body}>
               {checkIn.journals.map((journal,i)=>(
                   <Image key = {i} source = {moodMap[journal.mood].path}/>
               ))}
            </View>
        </TouchableOpacity>
        :
        <View style = {styles.container}>
             <Text style = {styles.header}>{checkIn.day}{`\n`}
                <Text>{checkIn.DOW.slice(0,3)}</Text>
             </Text>
             

             <View style = {styles.body}>
                 <Text style ={{fontSize:18,marginLeft:"5%", color:"rgba(0, 0, 0, 0.4)" }}>No Entries</Text>
             </View>
        </View>
        }
        </View>
    )
}

