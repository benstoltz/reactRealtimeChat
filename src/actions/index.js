import alt from '../alt';
import Firebase from 'firebase';


class Actions {

    constructor() {
        this.generateActions(
            'channelsReceived',
            'channelsFailed'
        );
    }

    login(args) {
        return (dispatch) => {
            let firebaseRef = new Firebase('https://react-stack-ben.firebaseio.com/messages');
            firebaseRef.authWithOAuthPopup("github", (error, user) => {
                if (error) {
                    return;
                }
                dispatch(user);
            });
        }
    }
}


export default alt.createActions(Actions);