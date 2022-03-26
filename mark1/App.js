/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { Alert } from 'bootstrap';
import React from 'react';
import { Node } from 'react';
import { TextInput,Button } from "react-native";


import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({ children, title }): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,

  };

  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  const [number1, onChangeNumber1] = React.useState(null);
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      
      <TextInput
      
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Enter Name"
        value={text}
      />
      <TextInput
        style={styles.input1}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Mobile Number"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input1}
        onChangeText={onChangeNumber1}
        value={number1}
        placeholder="Enter OTP"
        keyboardType="numeric"
      />
      
      <Button
        title="Get OTP"
        onPress={onClickOTP}
        
       
      />
       <Button
       style={{margin:5}}
        title="Lets Go"
        
       
      />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
  marginTop:150,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  input1: {
    
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    title: {
      textAlign: 'center',
      marginVertical: 8,
    },
    input2:{
      
    }
});


export default App;
