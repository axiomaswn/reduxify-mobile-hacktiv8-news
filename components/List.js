import React from 'react'
import { Container, Content, Card, CardItem, Body } from 'native-base';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  Image,
  View
} from 'react-native';

const showList = (props) => {
  return (<View>
    {
      props.datas.map((data, index) => {
        return(
          <Card key={index}>
              <CardItem>
                  <Text style={styles.judul}>{data.title}</Text>
              </CardItem>

              <CardItem>
                <Body>
                  <Text style={styles.newslist}>link: {data.url}</Text>
                  <Text style={styles.footer}>author: {data.author}</Text>

                </Body>
              </CardItem>
         </Card>
        )
      })
    }
  </View>
  )
}

const emptyList = () => {
  return (
    <Image
      style={styles.loadingAnimation}
      source={{uri: 'https://s-media-cache-ak0.pinimg.com/originals/0c/44/da/0c44dacf1b038014a6f941131c5e8aa2.gif'}}
    />
  )
}

export const List = (props) => {
  return (
    props.datas.length > 0 ? showList(props) : emptyList()
  )
}

const styles = StyleSheet.create({
  newslist:{
    // textAlign: 'center',
    fontFamily: 'Chalkboard SE',
    fontSize:9,
    color: '#283593'
    // marginTop: 10,
  },
  footer:{
    // textAlign: 'center',
    fontFamily: 'Chalkboard SE',
    fontSize:9,
    // marginTop: 10,
  },
  judul:{
    // textAlign: 'center',
    fontFamily: 'Chalkboard SE',
    fontSize:14,
    // marginTop: 10,
  },
    loadingAnimation: {
    width: 40,
    height: 40
  },
});
