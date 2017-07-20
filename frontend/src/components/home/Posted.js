import React from 'react';
import './Home.css';
import PostedForm from './PostedForm';
import { connect } from 'react-redux';
import { sendEmailAddress } from '../../actions/posted_action';

export class Posted extends React.Component {
    submit = () => {
        this.props.sendEmailAddress();
    };
    render() {
        const sendEmailAddressContent = this.props.sendEmailAddressStatus.success ? (<div>Success Message</div>) : <PostedForm onSubmit={this.submit}/>;
        return (
            <div className="posted">
                <div>Sign up for beta! </div>
                {sendEmailAddressContent}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { sendEmailAddressStatus: state.sendEmailAddress };
};

const mapDispatchToProps = { sendEmailAddress };
export default connect(mapStateToProps, mapDispatchToProps)(Posted);