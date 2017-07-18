import axios from 'axios';
import { change } from 'redux-form';

export const SEND_EMAIL_ADDRESS_SUCCESS = 'SEND_EMAIL_ADDRESS_SUCCESS';

export const sendEmailAddress = () => {
    let url = 'https://g40zteabni.execute-api.ap-southeast-2.amazonaws.com/beta/post-email';
    return (dispatch, getState) => {
        console.log(getState());
        axios.post(url, {
            email: getState().form.posted.values.email
        }).then(function (response) {
            console.log('success');
            // dispatch(sendEmailAddressSuccess());
        })
        .catch(function (error) {
            dispatch(change('posted', 'email', ''));
        });
    };
};

export const sendEmailAddressSuccess = () => (
    { type: SEND_EMAIL_ADDRESS_SUCCESS }
);