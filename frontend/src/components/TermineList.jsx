import React, { PropTypes } from 'react'
import Termin from './Termin'

const TermineList = ({ termine, onTerminClick }) => (
    <ul>
        {termine.map(termin =>
            <Termin
                key={termin.id}
                {...termin}
                onClick={() => onTerminClick(termin.id)}
            />
        )}
    </ul>
)

TermineList.propTypes = {
    termine: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        termin: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onTerminClick: PropTypes.func.isRequired
}

export default TermineList