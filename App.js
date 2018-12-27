import React, {Component} from 'react';
import {View, Button, Text} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import WebView from './components/WebView'

class HomeScreen extends Component {
  static navigationOptions = ({navigation}) => {
    const params = navigation.state.params || {};

    return {
      headerRight: (
        <Button
          onPress = {() => navigation.navigate('MyModal')}
          title = 'Info'
          color = 'rgb(146,168,209)'
        />
      )
    }
  }
  render(){
    return (
      <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home</Text>
        <Button title = 'Detail 바로가기' color = 'rgb(146,168,209)' onPress = {()=>{
          this.props.navigation.navigate('Details')
        }}/>
        <Button title = 'github' color = 'rgb(146,168,209)' onPress = {()=>{
          this.props.navigation.navigate('Site')
        }}/>
      </View>
    )
  }
}

class DetailScreen extends Component{
  render(){
    return (
      <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Detail</Text>
      </View>
    )
  }
}

class ModalScreen extends Component{
  render(){
    return(
      <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style = {{fontSize: 30}}> This is a Modal</Text>
        <Button
          onPress = {() => this.props.navigation.goBack()}
          title = '뒤로가기'
          color = 'rgb(146,168,209)'
        />
      </View>
    )
  }
}

class githubScreen extends Component{
  render(){
    return (
        <WebView/>     
    )
  }
}

const MainStack = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Details: { screen: DetailScreen },
    Site: { screen : githubScreen}
  }
)

const RootStack = createStackNavigator(
  {
    Main: {screen : MainStack},
    MyModal: {screen : ModalScreen}
  },
  {
    mode: 'Modal',
    headerMode: 'none'
  }
)

export default createAppContainer(RootStack);

class App extends Component{
  render(){
    return(
      <AppView/>
    )
  }
}
