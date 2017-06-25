import React, {Component} from 'react';
import {Page, Navbar, ContentBlockTitle, List, ListItem, 
        FormLabel, FormInput, Button, GridCol, GridRow, 
        ContentBlock, ButtonsSegmented, View, TimelineItem} from 'framework7-react';

import {displayTerminePerDay} from './TerminPerDayForTimeLine';

export const displayTerminePerMonth = (termine: array, month: string) => {
    return (termine.map((item, index) => {
        return (<TimelineItem side key={index} day={item.day} month={month}>
                    { displayTerminePerDay(item.termine) }
                </TimelineItem>
               );    
    }));
}