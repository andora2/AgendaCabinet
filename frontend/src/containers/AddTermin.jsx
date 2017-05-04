import React from 'react'
import { connect } from 'react-redux'
import { addTermin } from '../actions/TermineActions'
import {List, ListItem, FormLabel, FormInput,Fab} from 'framework7-react';

const pStyle = {margin: '1em 0'};

let AddTermin = ({ dispatch }) => {
    let input
    
    let onTerminChange = ({event}) => {
        input = event.target.value
    }    

    return (
        <List form>
        	<ListItem>
        		<FormLabel>"Termin text"</FormLabel>
                <FormInput type="text" 
                           placeholder="Termin Text"
                           onChange={ e => {
                                console.log(e);
                                input = e.target.value
                               }}
                           value={input}
                />
                <Fab click={dispatch(addTermin(input))}>
                    Add
                </Fab>
            </ListItem>
        </List>
    )
}
AddTermin = connect()(AddTermin)

export default AddTermin