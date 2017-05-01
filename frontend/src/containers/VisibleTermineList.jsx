import {connect} from 'react-redux'
import TermineList from '../components/TermineList'

const getVisibleTermine = (termine) => {
    return termine
}

const mapStateToProps = (state) => {
    return {
        termine: getVisibleTermine(state.termine)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const VisibleTermineList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TermineList)

export default VisibleTermineList