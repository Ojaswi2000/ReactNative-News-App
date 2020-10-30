import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Left, Body, Right, Button } from 'native-base';
import {Alert,Text,ActivityIndicator,View} from 'react-native';
import {getArticles} from '../../service/news2';
import DataItem from '../../component/dataItem';
export default class ListThumbnailExample extends Component {

  constructor(props)
  {
    super(props);
    this.state={
      isLoading:true,
      data:null
    }
  }
  componentDidMount() {
    getArticles().then(data=>{
      this.setState({
        isLoading:false,
        data: data
      });
    }, error =>{
      Alert.alert('Error','Something went wrong !!');
    }
    )
  }


  render() {
    console.log(this.state.data);
    let view= this.state.isLoading ? (
      <View>
        <ActivityIndicator animating={this.state.isLoading}/>
        <Text style={{marginTop:10}}>Please Wait...</Text>
      </View>
    ):(
      <List
            dataArray={this.state.data}
            renderRow={(item)=>{
              return <DataItem data={item}/>
            }}
          />
    ) 

    return (
      <Container>
        <Content>
          {view}
        </Content>
      </Container>
    );
  }
}
