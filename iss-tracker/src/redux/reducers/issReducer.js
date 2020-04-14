import { GET_ISS_COORDS } from '../actions/issActions';

const initState = {
    data: []
}

const issReducer = (state = initState, action) => {
    if(action.type === GET_ISS_COORDS) {
        return {
            ...state,
            data: action.data
        }
    }
}

export default issReducer;