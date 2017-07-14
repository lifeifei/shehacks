export const teamReducer = (state = {}, action) => {
    // console.log(action);
    switch (action.type) {
        case 'RENDER_TEAM_INFO':
            return action.team;
        default:
            return state;
    }
};