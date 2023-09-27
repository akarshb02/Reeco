const messages = {
    APPROVAL: "APPROVAL",
    MISSING: "MISSING"
}
export const messageStatus = (state, action) => {
    switch (action.type) {
        case "MISSING":
            return { state, 'MISSING': "MISSING..." };
        case "APPROVAL":
            return {...state, 'APPROVAL': "APPROVAL..." };
        default:
            return {...state, "APPROVAL": "APPROVAL" };

    }

}