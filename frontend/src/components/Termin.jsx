import React, { PropTypes } from 'react'

const Termin = ({ onClick, termin }) => (
    <li onClick={onClick}>
        { termin }
    </li>
)

Termin.propoTypes = {
        onClick: PropTypes.func.isRequired,
        termin: PropTypes.string.isRequired
}

export default Termin 