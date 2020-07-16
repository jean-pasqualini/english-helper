import React, {createContext, useReducer} from "react";
import mainReducer from "../../reducers/reducer";

type InitialStateType = {
    parts: any,
    sentencePattern: any,
};

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

const SentenceContext = createContext<{
    state: InitialStateType;
    dispatch: React.Dispatch<any>;
}>({
    state: initialState,
    dispatch: () => null
});

const SentenceProvider: React.FC = ({children}) => {
    const [state, dispatch] = useReducer(mainReducer, initialState);

    return (
        <SentenceContext.Provider value={{state, dispatch}}>
            {children}
        </SentenceContext.Provider>
    );
};

export { SentenceProvider, SentenceContext };
export default SentenceProvider;