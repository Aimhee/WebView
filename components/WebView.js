import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://github.com/Aimhee'}}
      />
    );
  }
}