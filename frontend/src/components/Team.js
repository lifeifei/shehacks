import React from 'react';
import { connect } from 'react-redux';
import { fetchTeam } from '../actions/team_action';

export class Team extends React.Component {
    componentDidMount() {
        this.props.fetchTeam();
    }

    render() {
        if (this.props.team.name) {
            return (
                this.props.team.name && <div>
                    Team
                    <div>{this.props.team.name}</div>
                    <div>{this.props.team.girls.map((girl, index) => (
                        <div key={index}>{girl.name}</div>
                    ))}</div>
                </div>
            );
        } else {
            return (<div></div>);
        }

    }
}

const mapStateToProps = state => ({
    team: state.team
});

const mapDispatchToProps = { fetchTeam };

export default connect(mapStateToProps, mapDispatchToProps)(Team);