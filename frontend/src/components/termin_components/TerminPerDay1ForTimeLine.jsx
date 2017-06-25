import React, {Component} from 'react';
import {Page, Navbar, ContentBlockTitle, List, ListItem, 
        FormLabel, FormInput, Button, GridCol, GridRow, 
        ContentBlock, ButtonsSegmented, View, TimelineItemChild} from 'framework7-react';

export const displayTerminePerDay = (termine: array) => {
    return (termine.map((item, index) => {
        return (
            <TimelineItemChild
                key={index}
                inner
                time={item.time}
                title={item.pacient.person_name.name}
                subtitle={item.treatment}
                text={`Task ${index + 1}`} >
                <ListItem link="/termin_form/" title="TerminForm"></ListItem>
            </TimelineItemChild>
        );
    }));
}