import React, {createContext, useReducer} from "react";
import _ from "lodash";

export const SentenceContext = createContext();

// https://www.sitepoint.com/replace-redux-react-hooks-context-api/#:~:text=The%20most%20popular%20way%20to,a%20framework%20such%20as%20Redux.&text=React%20hooks%20allow%20you%20to,share%20state%20with%20other%20components.

const initialState = {
    parts: [],
};

Array.prototype.insert = function ( index, item ) {
    this.splice( index, 0, item );
};

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_PART":
            return {
                parts: [
                    ...state.parts,
                    action.payload
                ]};
        case "PLACE_PART":
            const inMemory = [...state.parts];
            inMemory.insert(
                action.payload.key,
                action.payload
            );
            return { parts: inMemory };

        case "REMOVE_PART":
            return {
                parts: _.without(state.parts, state.parts[action.payload.key])
            }

        case "EMPTY_PARTS":
            return { parts: []};

        default:
            throw new Error();
    }
};

export default props => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <SentenceContext.Provider value={[state, dispatch]}>
            {props.children}
        </SentenceContext.Provider>
    );
};