import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import CarItem from './components/carItems';
// import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {

  // const image = './assets/images/Model3.jpeg';

  return (
    <View style={styles.container}>

    <CarItem/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  carContainer:{
    width: '100%',
    height: '100%',
  
  },
  titles:{
    width: '100%',
    marginTop: '30%',
    alignItems: 'center'

  }
  ,
  title: {
    fontSize: 40,
    fontWeight: '500',
  },

  subTitle:{
    fontSize: 16,
    color: '#5c5e62',
  },
  image: {
    position: 'absolute',
    resizeMode: 'cover',
    // backgroundColor: '5c5e62',
    width: '100%',
    // flex: 1,
    // justifyContent: "center",
    height: '100%',
  }
});

// import React from "react";
// import { ImageBackground, StyleSheet, Text, View } from "react-native";

// // const image = { uri: "https://reactjs.org/logo-og.png" };

// const App = () => (
//   <View style={styles.container}>
//     <ImageBackground source={('./assets/images/Model3.jpeg')} resizeMode="cover" style={styles.image}>
//       <Text style={styles.text}>Inside</Text>
//     </ImageBackground>
//   </View>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   image: {
//     flex: 1,
//     justifyContent: "center"
//   },
//   text: {
//     color: "white",
//     fontSize: 42,
//     lineHeight: 84,
//     fontWeight: "bold",
//     textAlign: "center",
//     backgroundColor: "#000000c0"
//   }
// });

// // export default App;