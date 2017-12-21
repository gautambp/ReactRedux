import _ from 'lodash';

export default function(state = {}, action) {
    switch (action.type) {
        case 'FETCH_POST':
            return {...state, [action.payload.data.id] : action.payload.data}
        case 'FETCH_POSTS':
            return _.mapKeys(action.payload.data, "id");
        case 'DELETE_POST':
            return _.omit(state, action.payload);
    }
    return state;
}
