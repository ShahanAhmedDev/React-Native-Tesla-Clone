import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import styles from './styles'


const CarItem = (props) => {
  return (
    <View style = {styles.carContainer}>

      <ImageBackground
        source = {require('../../assets/images/Model3.jpeg')}
        // resizeMode='cover'
        styles ={styles.image}
        >
        <View style={styles.titles}>
          <Text style={styles.title}> Model S</Text>
          <Text style={styles.subTitle}> Starting at $69,000</Text>

        </View>
      </ImageBackground>


      </View>
  )
}
export default CarItem;