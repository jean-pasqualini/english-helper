import React, {createContext, useReducer} from "react";
import Place from "../../components/SentenceMaker/Place";

export const SentenceContext = createContext();

// https://www.sitepoint.com/replace-redux-react-hooks-context-api/#:~:text=The%20most%20popular%20way%20to,a%20framework%20such%20as%20Redux.&text=React%20hooks%20allow%20you%20to,share%20state%20with%20other%20components.

const initialState = {
    parts: [],
};

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_PART":
            return {
                parts: [
                    ...state.parts,
                    <Place description={action.payload.description} content={action.payload.content}/>
                ]};

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