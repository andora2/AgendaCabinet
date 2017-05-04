import React, { PropTypes } from 'react'
import Termin from './Termin'
import {Timeline} from 'framework7-react';	

const TermineList = ({ termine, onTerminClick }) => (
    <Timeline>
        {termine.map(termin =>
            <Termin
                key={termin.id}
                {...termin}
                onClick={() => onTerminClick(termin.id)}
            />
        )}
    </Timeline>
)

TermineList.propTypes = {
    termine: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        termin: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onTerminClick: PropTypes.func.isRequired
}

export default TermineList