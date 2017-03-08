import React, { Component } from 'react';
import { connect } from 'react-redux'
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
  View
} from 'react-native';

class PeopleScene extends Component {

  render() {
    return (

      <View style={styles.container}>

        <View style={styles.header}>
          <Text style={styles.welcome}>
            People List
          </Text>
          <Image
            style={styles.newspaper}
            source={{uri: 'https://image.flaticon.com/icons/png/512/46/46799.png'}}
          />
          <Text style={styles.instructions}>
            Search
          </Text>
          <View style={styles.searchForm}>
            <Search style={styles.searchInput} handleChange={this.handleChange}/>
          </View>
        </View>

        <Button small warning full onPress={() => {
            this.props.navigator.pop()
          }}>
          <Text>Go to Hacktiv8 News</Text>
        </Button>
          <View >
            {
              this.props.peoples.map((data,index) => {
                return (
                  <Text key={index}>{data.title}</Text>
                )
              })
            }
          </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    peoples: state.peoples
  }
}

export default connect(mapStateToProps, null)(PeopleScene)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: '#FFC107',
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
    fontWeight:'bold',
    color:'white',
    fontFamily: 'Cochin',
    fontSize: 20,
    margin: 10,
  },
  instructions: {
    color:'white',
    marginBottom: 5,
    fontFamily: 'Cochin',
  },
  buttonNavigator: {
    color: 'red',
    fontSize: 15,
    marginBottom: 5,
    fontFamily: 'Cochin',
  },
});
