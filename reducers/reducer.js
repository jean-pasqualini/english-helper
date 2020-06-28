import sentencePatternReducer from "./sentencePatternReducer";
import sentencePartReducer from "./sentencePartReducer";

const reducer = (state, action) => {
    return {
        sentencePattern: sentencePatternReducer(state, action),
        parts: sentencePartReducer(state, action),
    }
};

export default reducer;