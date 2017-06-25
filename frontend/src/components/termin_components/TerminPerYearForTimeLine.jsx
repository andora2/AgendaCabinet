import React, {Component} from 'react';
import {Page, Navbar, ContentBlockTitle, List, ListItem, 
        FormLabel, FormInput, Button, GridCol, GridRow, 
        ContentBlock, ButtonsSegmented, View, TimelineMonth} from 'framework7-react';

import {displayTerminePerMonth} from './TerminPerMonthForTimeLine';

export const displayTerminePerYear = (termine: array) => {
    return (termine.map((item, index) => {
        return (<TimelineMonth title={item.month}>
                    { displayTerminePerMonth(item.days,item.month) }
                </TimelineMonth>);    
    }));
}