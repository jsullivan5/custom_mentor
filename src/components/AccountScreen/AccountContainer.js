import {connect} from 'react-redux'
import {userSignOut} from '../../actions/logout'
import Account from './Account'

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.session.isLoggedIn,
        currentUser: state.session.currentUser,
        errorMessage: state.session.errorMessage
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        userSignOut: () => dispatch(userSignOut())
    }
}


const AccountContainer = connect(mapStateToProps)(Account)

export default AccountContainer
