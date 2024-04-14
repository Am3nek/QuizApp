/*By conditional rendering we can control what gets rendered in your application based on certain conditions*/
import PropTypes from "prop-types"

function UserGreeting(props){

    const welcomeGreeting = <h2 className="welcome-greeting">Welcome {props.username}</h2>
    const loginPrompt = <h2 className="login-prompt">Please log in</h2>

    return (
        props.isLogged ? welcomeGreeting:loginPrompt
    )
}

UserGreeting.propTypes = {
    isLogged: PropTypes.bool,
    username: PropTypes.string
}

UserGreeting.defaultProps = {
    isLogged: false,
    username: "Guest"
}

export default UserGreeting;