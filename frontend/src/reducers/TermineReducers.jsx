import {ADD_TERMIN} from "../actions/TermineActions";

const termin = (state = {}, action ) => {
	switch(action.type){
		case ADD_TERMIN:
			return {
				id: action.id,
				termin: action.termin
			}
		default:
			return state
	}
}

const termine = (state = [], action) => {
	switch (action.type){
		case ADD_TERMIN:
			return [
			  ...state,
			  termin(undefined,action)
	        ]
		default:
			return state
	}
}

export default termine;

/*const initialState = {
		plannedTime: '',
		realTime: '',
		finishTime: '',
		cancelationType: '',
		workTypeId: 0,
		payment: 0,
		offerId: 0,
		customerId: 0,		
		isSaved: false
};

function termin(state=initialState, action){
	switch(action.type){
		case constants.LOAD_TERMINE:
			return { ...state,
			isSaved: true
		}
		case constants.LOAD_TERMIN_DETAILS:
			return { ...state,
			isSaved: true
		}
		case constants.SAVE_TERMIN:
			return { ...state,
			isSaved: true
		}
		case constants.DELETE_TERMIN:
			return { ...state,
			isSaved: true
		}
		case constants.MODIFY_TERMIN_CANCELATION_TYPE:
			return { ...state,
			cancelationType: action.payload.cancelationType
		}
	};
};

export default termin;*/