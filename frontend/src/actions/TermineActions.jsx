let nextTerminId = 0
export const ADD_TERMIN = "ADD_TERMIN";
export const addTermin = (termin) => {
	return {
		type: ADD_TERMIN,
		id: nextTerminId++,
		termin
	};
};

/*export const LOAD_TERMINE = "LOAD_TERMINE";
export function loadTermine(){
	return {
		type: LOAD_TERMINE
	};
};

export const LOAD_TERMIN_DETAILS = "LOAD_TERMIN_DETAILS";
export function loadTerminDetails(){
	return {
		type: LOAD_TERMIN_DETAILS
	};
};

export const SAVE_TERMIN = "SAVE_TERMIN";
export function saveTermin(){
	return {
		type: SAVE_TERMIN
	};
};

export const DELETE_TERMIN = "DELETE_TERMIN";
export function deleteTermin(){
	return {
		type: DELETE_TERMIN
	};
};

export const MODIFY_TERMIN_PLANNED_TIME = "MODIFY_TERMIN_PLANNED_TIME";
export function modifyTerminPlannedTime( time ){
	return {
		type: MODIFY_TERMIN_PLANNED_TIME,
		pyload: {
			time
		}
	};
};

export const MODIFY_TERMIN_REAL_TIME = "MODIFY_TERMIN_REAL_TIME";
export function modifyTerminRealTime( time ){
	return {
		type: MODIFY_TERMIN_REAL_TIME,
		pyload: {
			time
		}
	};
};

export const MODIFY_TERMIN_WORKTYPE = "MODIFY_TERMIN_WORKTYPE";
export function modifyTerminPlannedTime( worktypeID ){
	return {
		type: MODIFY_TERMIN_WORKTYPE,
		pyload: {
			worktypeID
		}
	};
};

export const MODIFY_TERMIN_CUSTOMER = "MODIFY_TERMIN_CUSTOMER";
export function modifyTerminCustomer( customerID ){
	return {
		type: MODIFY_TERMIN_CUSTOMER,
		pyload: {
			customerID
		}
	};
};

export const MODIFY_TERMIN_FINISH_TIME = "MODIFY_TERMIN_FINISH_TIME";
export function modifyTerminFinishTime( time ){
	return {
		type: MODIFY_TERMIN_FINISH_TIME,
		pyload: {
			time
		}
	};
};

export const MODIFY_TERMIN_CANCELATION_TYPE = "MODIFY_CANCELATION_TYPE";
export function modifyTerminCancelationType( cancelationType ){
	return {
		type: MODIFY_TERMIN_CANCELATION_TYPE,
		pyload: {
			cancelationType
		}
	};
};
*/