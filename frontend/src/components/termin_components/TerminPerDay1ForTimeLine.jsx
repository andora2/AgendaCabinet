import React, {Component} from 'react';
import {Page, Navbar, ContentBlockTitle, List, ListItem, 
        FormLabel, FormInput, Button, GridCol, GridRow, 
        ContentBlock, ButtonsSegmented, View, TimelineItemChild, Link} from 'framework7-react';

export const displayTerminePerDay = (termine: array) => {
    return (termine.map((item, index) => {
        return (
                <TimelineItemChild
                    key={index}
                    time={item.time}
                    inner
                    title={item.pacient.person_name.name}
                    subtitle={item.treatment}
                    text={`Task ${index + 1}`}
                    link="/termin_form/" >
                <ListItem title="Dynamic Route" link={`/edit_termin/${index}/${item.pacient.person_name.name}`} />
                </TimelineItemChild>
        );
    }));
}