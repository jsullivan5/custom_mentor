import {connect} from 'react-redux'
import {authenticateUser} from '../../actions/login'
import Reviews from './Reviews'

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.session.isLoggedIn,
        currentUser: state.session.currentUser,
        errorMessage: state.session.errorMessage
    }
}

const ReviewsContainer = connect(mapStateToProps)(Reviews)

export default ReviewsContainer
