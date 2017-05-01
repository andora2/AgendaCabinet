import React, { Component } from 'react';
import { connect } from 'react-redux';
import Termin from './presentational/Termin';
import * as terminActions from '../actions/TermineActions';

class TerminContainer  extends Component {
	render() {
		return (
				<Termin 
					cancelationType = {this.propos.cancelationType}
					isSaved = {this.propos.isSaved}
					modifyCancelationType: {this.props.modifyCancelationType}
				/>
		);
	};
};

const mapStateToProps = (state, ownProps) => {
	const {cancelationType, isSaved} = state.cancelationType;
	return {cancelationType, isSaved};
}