export const actionApproval = (msg) => {
    return {
        type: "APPROVAL",
        payload: msg
    }
}

export const actionMissing = (msg) => {
    return {
        type: "MISSING",
        payload: msg
    }
}