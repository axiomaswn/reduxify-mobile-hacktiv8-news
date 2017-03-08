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
    fetch('http://hn.algolia.com/api/v1/search?query=react')
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
          <Text style={styles.welcome}>
            Hacktiv8 News!
          </Text>
          <Image
            style={styles.newspaper}
            source={{uri: 'https://cdn2.iconfinder.com/data/icons/perfect-flat-icons-2/512/Newspaper_news_rss_vector_paper_symbol_simple.png'}}
          />
          <Text style={styles.instructions}>
            Search
          </Text>
          <View style={styles.searchForm}>
            <Search  handleChange={this.handleChange}/>
          </View>
        </View>
        <Button small info full onPress={() => {
            this.props.navigator.push({
              title: 'People Scene',
              index: 1
            })
          }}>
          <Text>Go to People List</Text>
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
    backgroundColor: '#2196F3',
    flexDirection: 'column',
    width: '100%',
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: 'center'
  },
  searchForm:{
    width:'50%',
  },
  newspaper: {
    width: 40,
    height: 40
  },
  welcome: {
    color:'white',
    fontWeight:'bold',
    fontFamily: 'Cochin',
    fontSize: 20,
    margin: 10,
  },
  instructions: {
    color: 'white',
    marginBottom: 5,
    fontFamily: 'Cochin',
  },
});
