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
        return (
            <div className="posted">
                <div>We're not live yet, but be one of the first to sign up! </div>
                <PostedForm onSubmit={this.submit}/>
            </div>
        );
    }
}

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = { sendEmailAddress };
export default connect(mapStateToProps, mapDispatchToProps)(Posted);