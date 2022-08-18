import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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


export default styles;