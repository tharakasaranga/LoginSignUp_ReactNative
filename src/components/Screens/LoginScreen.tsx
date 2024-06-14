import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'


function Signin() {
  return (
    <View style={{ flexDirection: 'row', margin: 20 }}>
      <View style={{
        height: 70, flex: 1, justifyContent: 'center'
      }}>
        <Text style={{
          fontSize: 25, fontWeight: 500,
          color: 'black', marginLeft: 40
        }}>Sign In</Text>


      </View>

      <View style={{
        height: 70, flex: 1, justifyContent: 'center', alignItems: 'flex-end', marginRight: 30
      }}>

        <View style={{
          width: 70,
          height: 70, backgroundColor: 'blue', borderRadius: 50, justifyContent: 'center', alignItems: 'center'
        }}>


        </View>

      </View>

    </View>


  );
}


function BottomPart(p: any) {

  const stack = p.stack;

  function gotoSignUp() {
    stack.navigate('SignUp');
  }

  return (
    <View style={{ flexDirection: 'row', marginTop: 100, margin: 20 }}>
      <TouchableOpacity onPress={gotoSignUp}>

        <View style={{
          height: 70, flex: 1, justifyContent: 'center'
        }}>


          <Text style={{
            fontSize: 20, fontWeight: 800,
            color: 'black', marginLeft: 40
          }}>Sign Up</Text>


        </View>
      </TouchableOpacity>

      <View style={{
        height: 70, flex: 1, justifyContent: 'center', alignItems: 'flex-end', marginRight: 30
      }}>
        <Text style={{
          fontSize: 20, color: 'black', fontWeight: 800
        }}>Forgot Password</Text>

      </View>

    </View>


  );
}



function LoginField(p: any) {
  const stack = p.stack;
  return (
    <View>
      <View style={{
        height: 150,
        marginHorizontal: 20,
        marginTop: 60,
        justifyContent: 'center',
        paddingLeft: 20
      }}>
        <TextInput style={{
          backgroundColor: 'white',
          marginRight: 30,
          paddingLeft: 30,
          fontSize: 15,
          borderRadius: 20,
          borderWidth: 3
        }} placeholder="Email" placeholderTextColor={'black'} />

        <TextInput style={{
          backgroundColor: 'white',
          marginTop: 15,
          marginRight: 30,
          paddingLeft: 30,
          fontSize: 15,
          borderRadius: 20,
          borderWidth: 3
        }} placeholder="Password" placeholderTextColor={'black'} />




      </View>
      <Signin />
      <BottomPart stack={stack} />





    </View>
  );
}



const LoginScreen = (props: any) => {
  const stack = props.navigation;

  return (

    <View style={sty.container}>
      <Image style={{
        width: '100%',
        height: '100%',
        position: "absolute"
      }} source={
        require('../../../Assets/img/template.jpg')
      } resizeMode="cover" />

      <Text style={{
        fontSize: 40,
        marginLeft: 20,
        marginRight: 20,
        color: 'black',
        fontWeight: 900,
        marginTop: 20,

      }}>{'Welcome\nBack'}</Text>
      <LoginField stack={stack} />

    </View>

  )
}

const sty = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
})

export default LoginScreen

