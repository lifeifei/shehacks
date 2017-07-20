export const sendEmailAddress = (state = {}, action) => {
    switch (action.type) {
        case 'SEND_EMAIL_ADDRESS_SUCCESS':
            return { success: true };
        default:
            return state;
    }
};