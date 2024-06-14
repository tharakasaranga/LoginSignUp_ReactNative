import { View, Text } from 'react-native'
import React from 'react'

const CustomLabel2 = (props:any) => {
  return (
    <View style = {{
        marginLeft:20
    }}>
      <Text style = {{
        fontWeight:'bold',
        fontSize:20,
        color:'green'
      }}>Today is 2024.05.31. {props.children}</Text>
    </View>
  )
}

export default CustomLabel2