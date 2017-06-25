import React, {Component} from 'react';
import {Page, Navbar, ContentBlockTitle, List, ListItem, 
        FormLabel, FormInput, Button, GridCol, GridRow, 
        ContentBlock, ButtonsSegmented, View, 
        Timeline, TimelineItem, TimelineYear, TimelineMonth, TimelineItemChild,Fab,Icon} from 'framework7-react';

import {Termin} from './Termin';

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
                <ContentBlockTitle>Termine</ContentBlockTitle>
                <Timeline>
                  {this.props.termine.map((termineYear, yearIdx) => 
                        <TimelineYear title={termineYear.year}>
                            {termineYear.months.map((termineMonth, monthIdx) => 
                                <TimelineMonth title={termineMonth.month}>
                                    {termineMonth.days.map((termineDay, dayIdx) =>
                                        <TimelineItem side key={dayIdx} day={termineDay.day} month={termineMonth.month}>
                                           <TimelineItemChild key={dayIdx*10} content="new"/>
                                            {termineDay.termine.map((termin, terminIdx) =>
                                                <TimelineItemChild key={terminIdx}   
                                                                   inner                                                                
                                                                   time={termin.time}
                                                                   title={termin.pacient.person_name.name}
                                                                   subtitle={termin.treatment}
                                                                   text={`Task ${terminIdx + 1}`} />
                                            )}
                        
                                        </TimelineItem>
                                    )}
                                </TimelineMonth> 
                            )}
                        </TimelineYear>
                  )}
                </Timeline>
            </div>
        );
    }
};