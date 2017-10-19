import React, {Component} from "react"
import { Button } from 'reactstrap'

export default class UserHome extends Component {
    render() {
      let user = this.props.currentUser.data.user_details
        return (
            <div>
                <h1>Welcome, {user.name}</h1>
                <Button color="primary" onClick={() => this.props.userSignOut()}>Sign out</Button>
            </div>
        );
    }
}
