import React from 'react'
import { connect } from 'react-redux'
import { addTermin } from '../actions/TermineActions'
import {List, ListItem, FormLabel, FormInput,Fab} from 'framework7-react';

const pStyle = {margin: '1em 0'};

let AddTermin = ({ dispatch }) => {
    let input
    
    return (
        <List form>
        	<ListItem>
        		<FormLabel>"Termin text"</FormLabel>
                <FormInput type="text" placeholder="Termin Text" ref={node => {
                    input = node
                }}/>
                <Fab style={pStyle} onClick={e => {
	                    e.preventDefault()
	                    console.log(e);
	                    console.log( input );
	                    dispatch(addTermin(input))
                    }}>
                	Add Termin
                </Fab>
            </ListItem>
        </List>
    )
}
AddTermin = connect()(AddTermin)

export default AddTermin