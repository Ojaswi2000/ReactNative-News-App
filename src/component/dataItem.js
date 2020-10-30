import React,{Component} from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
export default class DataItem extends Component
{

    constructor(props){
        super(props);
        this.data=props.data;
    }
    render()
    {
        return(
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri:this.data.urlToImage !=null ?this.data.urlToImage:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Chrome_icon_%28September_2014%29.svg/1200px-Google_Chrome_icon_%28September_2014%29.svg.png' }} />
              </Left>
              <Body>
                <Text>{this.data.title}</Text>
        <Text note numberOfLines={2}>{this.data.description}</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
        );
    }
    

}