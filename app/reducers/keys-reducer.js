// @flow
import { NEW_KEYS } from '../actions/new-keys-actions';
import { REHYDRATE } from 'redux-persist/constants'

export default function newKeysReducer(state: Object = { data: [] }, action) {
    let data = state;
    switch (action.type) {
        case REHYDRATE:
            var newKeys = action.payload.newKeys;
            if (newKeys) return { ...state, ...newKeys };
            return state;
        case NEW_KEYS:
            data.data.push(action.keys);
            return { ...state, ...data };
        default:
            return state;
    }
}
