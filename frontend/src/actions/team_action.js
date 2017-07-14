import axios from 'axios';

export const RENDER_TEAM_INFO = 'RENDER_TEAM_INFO';

export const fetchTeam = () => {
    let url = 'http://localhost:3004/team';
    return (dispatch) => {
        axios.get(url)
            .then(function (response) {
                dispatch(renderTeam(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    };
};

export const renderTeam = (team) => (
    { type: RENDER_TEAM_INFO, team: team }
);