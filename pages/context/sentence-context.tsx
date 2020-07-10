import React, {createContext, useReducer} from "react";
import reducer from "../../reducers/reducer";

export const SentenceContext = createContext();

const initialState = {
    parts: [],
    sentencePattern: {
        tense: 'present',
        tense_form: 'simple',
        form: 'declarative',
        type: 'simple',
        pattern: 'S-V',
        active_passive: 'active',
    },
};

export default props => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <SentenceContext.Provider value={[state, dispatch]}>
            {props.children}
        </SentenceContext.Provider>
    );
};