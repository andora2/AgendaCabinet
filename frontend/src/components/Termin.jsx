import React, { PropTypes } from 'react'
import {TimelineItem} from 'framework7-react';	

const Termin = ({ onClick, termin }) => (
    <TimelineItem onClick={onClick} day="21" month="DEC" inner content={termin}/>
)

Termin.propoTypes = {
        onClick: PropTypes.func.isRequired,
        termin: PropTypes.string.isRequired
}

export default Termin 