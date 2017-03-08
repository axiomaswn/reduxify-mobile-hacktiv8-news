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
          <Image
            style={styles.starwarslogo}
            source={{uri: 'https://lumiere-a.akamaihd.net/v1/images/ep_vii_logo_a87c8864.png?region=0%2C0%2C325%2C180&width=320'}}
          />
          <View style={styles.searchForm}>
            <Search style={styles.searchInput} handleChange={this.handleChange}/>
          </View>
        </View>

        <Button small light full onPress={() => {
            this.props.navigator.pop()
          }}>
          <Text>Go to Redux News</Text>
        </Button>
        <View >
          {
            this.props.peoples.map((data,index) => {
              return (
                <Text style={styles.newslist} key={index}>{data.title}</Text>
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
  starwarslogo: {
    width: 180,
    height: 90
  },
  newslist:{
    textAlign: 'center',
    fontFamily: 'Chalkboard SE',
    fontSize:9,
    marginTop: 10,
  },
});
