import React from 'react'
import { connect } from 'react-redux'
import { addTermin } from '../actions/TermineActions'

let AddTermin = ({ dispatch }) => {
    let input
    
    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                if(!input.value.trim()){
                    return
                }
                dispatch(addTermin(input.value))
                input.value = ''
                }}>
                <input ref={node => {
                    input = node
                }}/>
                <button type="submit">
                    Add Termin
                </button>
            </form>
        </div>
    )
}
AddTermin = connect()(AddTermin)

export default AddTermin