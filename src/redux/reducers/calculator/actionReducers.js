// Third-party imports

// Global imports
import actionTypes from "@/redux/actionTypes"

// Local imports

////////////////////////////////////////////////////////////////////////////////

const actionReducers = {
	[actionTypes.formFields.SET_FORM_FIELDS]: (draft, action) => {
		draft.countries = action.payload.countries
		draft.itemTypes = action.payload.itemTypes
		draft.materials = action.payload.materials
	},
	
}

export default actionReducers
