const initialState = {
	allcategories: [],
	allbrands: [],
	clickedCat: '',
	catId: '',
    clickBrand:''
};

const categoryReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'categories':
			return { ...state, allcategories: [ ...action.payload ] };
		case 'catfilter':
			return { ...state, clickedCat: action.payload.name, catId: action.payload.id };
		case 'brands':
			return { ...state, allbrands: action.payload };
        case 'brandfilter':
            return {...state, clickBrand:action.payload}
		default:
			return state;
	}
};
export default categoryReducer;
