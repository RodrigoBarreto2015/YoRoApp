export default (state, action) => {
    switch (action.type) {
        case "CONFIRM_PRESENCE":
            return {
                ...state,
                confirmed: action.payload
            }
        case "UPDATE_ITENS":
            return {
                ...state,
                itens: action.payload
            }
        case "CHOOSE_ITEM":
            return {
                ...state,
                itens: [action.payload, ...state.itens]
            }
        case "UNCHOOSE_ITEM":
            return {
                ...state,
                itens: action.payload
            }
        case "UPDATE_INVITE_CODE":
            return {
                ...state,
                inviteCode: action.payload
            }
        case "UPDATE_INVITE_NAME":
            return {
                ...state,
                inviteName: action.payload
            }
        case "UPDATE_INVITE_CONFIRMATION":
            return {
                ...state,
                confirmed: action.payload
            }
        case "UPDATE_INVITE_QUANTITY":
            return {
                ...state,
                inviteQuantity: action.payload
            }
        default:
            return state;
    }
};