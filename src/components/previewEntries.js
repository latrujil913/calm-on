import React, { useEffect} from 'react';
import { Text, View, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import moment from 'moment'
import { useNavigation } from '@react-navigation/native'
import styles from '../stylesheets/previewEntriesStyles'

/**
 * Used in previewEntires.js (Daily Preview) for each check-in
 * @param mood Mood in each check-in 
 * @param journal User selected emotion state string
 * @param time Time of the day of the check-in
 * @param image Emoji associated with the mood
 * @param showJournal Function used to locate check-in by time param and display in detailed view
 * @param color BackgroundColor of the box container
 * @param empty Empty is true if there's zero or less than four check-ins for the day
 */
export const Box = ({mood,journal,time,image,showJournal,color,empty})=>{
    const navigation = useNavigation()
    return(
        <View style = {styles.container}>
        {empty? 
            <TouchableOpacity onPress = {()=>navigation.navigate("DailyCheckIn")} style = {{...styles.box}}>
                    <Image style = {{marginLeft:20,marginTop:20}} source = {require('../../assets/addJournal.png')}/>
                <Text style = {{...styles.journalTitle,marginTop:10,marginRight:20}}>Tell me how you're feeling</Text>
            </TouchableOpacity>
        :
            <View >
                <Text style = {styles.time}>{moment(time).format('LT')}</Text>
                <TouchableOpacity  onPress = {()=>showJournal(time)} 
                    style = {{...styles.box,backgroundColor:color}}
                >
                        <View style = {styles.iconBox}>
                            <Image source = {image} />
                        </View>
                    <View>

                    <Text style = {styles.journalTitle}>{mood.charAt(0).toUpperCase()+mood.slice(1)}</Text> 
                    <Text style = {styles.journal}>{journal}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        }
        </View>
    )

} 


/**
 * 
 * @param journals Check-ins array of a specific day
 * @param date Date of the check-in
 * @param showJournal Function used to locate check-in by time param
 */
const previewEntries = ({journals,date,showJournal})=>{

/**
 * Contains all images associated with each emotion
 */
    const moodMap = {
        happy: {path:require('../../assets/preview/happy.png'), color: '#FBC423'},
        angry: {path:require('../../assets/preview/angry.png'), color: '#F09696'},
        sad: {path:require('../../assets/preview/sad.png'), color: '#DF9AFF'},
        scared: {path:require('../../assets/preview/scared.png'), color: '#A5DFF0'},
        excited: {path:require('../../assets/preview/excited.png'), color: '#AED4B0'},
        worried: {path:require('../../assets/preview/worried.png'), color: '#E8B285'}
    }
    
    /**
     * Map out each check-ins of the day and display them through Box.js
     */
    const journalList = journals.map((journal,i)=>(
        <Box  color = {moodMap[journal.mood].color} image = {moodMap[journal.mood].path} key = {i} showJournal = {showJournal} journal = {journal.journal} mood = {journal.mood} time = {journal.createdAt}/>
    ))
    
    return (
        <View >
            <Text style = {styles.date}>{date}</Text>
            {journalList}
        </View>
    )
}

export default previewEntries

