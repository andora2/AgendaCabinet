import React, {Component} from 'react';
import {Page, Navbar, ContentBlockTitle, List, ListItem, 
        FormLabel, FormInput, Button, GridCol, GridRow, 
        ContentBlock, ButtonsSegmented, View} from 'framework7-react';

export class Termin extends Component {
      constructor(props, context) {
        super(props, context);

        this.state = {
            otherData: '2014-04-30',
            otherData1: 1
        };        
    }

    render() {
        return (
            <List inset>
                <ListItem title={this.props.data.text} />
            </List>
        );
    }
};