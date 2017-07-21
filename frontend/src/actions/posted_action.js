import axios from 'axios';

export const SEND_EMAIL_ADDRESS_SUCCESS = 'SEND_EMAIL_ADDRESS_SUCCESS';

export const sendEmailAddress = () => {
    let url = 'https://g40zteabni.execute-api.ap-southeast-2.amazonaws.com/beta/post-email';
    return (dispatch, getState) => {
        axios.post(url, {
            email: getState().form.posted.values.email
        }).then(function (response) {
            dispatch(sendEmailAddressSuccess());
        })
        .catch(function (error) {
            dispatch(sendEmailAddressSuccess());
        });
    };
};

export const sendEmailAddressSuccess = () => (
    { type: SEND_EMAIL_ADDRESS_SUCCESS }
);