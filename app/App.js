import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import styled from 'styled-components/native';

const Header = styled.Text`
  font-size: 25
`;

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header>Hi :)</Header>
      </View>
    );
  }
}
