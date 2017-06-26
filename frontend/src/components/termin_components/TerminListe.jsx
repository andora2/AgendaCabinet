import React, {Component} from 'react';
import {Page, Navbar, ContentBlockTitle, List, ListItem, 
        FormLabel, FormInput, Button, GridCol, GridRow, 
        ContentBlock, ButtonsSegmented, View, 
        Timeline, TimelineItem, TimelineYear, TimelineMonth, TimelineItemChild,Fab,Icon} from 'framework7-react';

import {Termin} from './Termin';
import {displayTerminePerDay} from './TerminPerDay1ForTimeLine';

const onActionClick = (terminDay: object) => {
    console.log('Dial action clicked!' + terminDay)
}

export class TerminListe extends Component {
      constructor(props, context) {
        super(props, context);

        this.state = {
            birthDate: '2014-04-30',
            radioSelected: 1
        };        
    }

    render() {
        return (
            <div>
                <Timeline>
                  {this.props.termine.map((terminePerDate, terminDateIdx) =>
                        <TimelineItem title={terminePerDate.day}>
                            Hallo {this.props.list_idx} {this.props.value}
                            { displayTerminePerDay(terminePerDate.termine) } 
                        </TimelineItem>
                  )}
                </Timeline>
            </div>
        );
    }
};