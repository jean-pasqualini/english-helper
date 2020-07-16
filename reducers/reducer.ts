import sentencePatternReducer from "./sentencePatternReducer";
import sentencePartReducer from "./sentencePartReducer";

const mainReducer = (state, action) => {
    return {
        sentencePattern: sentencePatternReducer(state, action),
        parts: sentencePartReducer(state, action),
    }
};

export default mainReducer;