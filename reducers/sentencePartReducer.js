Array.prototype.insert = function ( index, item ) {
    this.splice( index, 0, item );
};

const sentencePartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_PART":
            return [...state.parts, action.payload]
        case "PLACE_PART":
            const parts = [...state.parts];
            parts.insert(
                action.payload.key,
                action.payload
            );
            return parts;

        case "REMOVE_PART":
            return _.without(state.parts, state.parts[action.payload.key]);

        case "REPLACE_PARTS":
            return action.payload.parts;

        default:
            return state.parts;
    }
};

export default sentencePartReducer;