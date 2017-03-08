import React, { Component } from 'react';
import {List} from './List'
import {Search} from './Search'
import { Button } from 'native-base';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  Image,
  Navigator,
  ScrollView,
  View
} from 'react-native';

export default class NewsScene extends Component {
  constructor (props) {
    super(props)
    this.state = {
      datas: [],
      searchKeyword: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }
  componentWillMount() {
    const appThis = this
    fetch('http://hn.algolia.com/api/v1/search?query=redux')
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      setTimeout(() => {
        appThis.setState({
        datas: data.hits
      })}, 0)
    });
  }
  handleChange (e) {
    this.setState({
      searchKeyword: e.nativeEvent.text
    });
  }
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <Image
            style={styles.logoredux}
            source={{uri: 'https://raw.githubusercontent.com/reactjs/redux/master/logo/logo-title-dark.png'}}
          />
          <View style={styles.searchForm}>
            <Search  handleChange={this.handleChange}/>
          </View>
        </View>
        <Button small light full onPress={() => {
            this.props.navigator.push({
              title: 'People Scene',
              index: 1
            })
          }}>
          <Text>Go to SWAPI</Text>
        </Button>
        <ScrollView >
          <List datas={this.state.datas.filter(data => {
              return data.title.toLowerCase().indexOf(this.state.searchKeyword.toLowerCase()) !== -1
            })
          } />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: 'white',
    flexDirection: 'column',
    width: '100%',
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: 'center'
  },
  searchForm:{
    width:'50%',
  },
  logoredux: {
    width: 180,
    height: 90
  },
});
