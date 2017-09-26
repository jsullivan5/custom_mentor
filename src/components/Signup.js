import React, {Component} from "react";
import axios from 'axios';

export class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formValues: {
        type:'Mentee'
      }
    }
  }
  handleChange(event) {
    event.preventDefault();
    let formValues = this.state.formValues;
    let name = event.target.name;
    let value = event.target.value;

    formValues[name] = value;

    this.setState({formValues});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSignUp(this.state.formValues)
    //send data to API
    axios({
    method: 'POST',
    url: 'custommentor/custom_mentor/serverapi/user.php',
    data: "requesttype=Signup&data=" + (JSON.stringify(this.state.formValues))
  }).then(function (response) {
    //sample response :{"response":"failed","error":"Your email has been registered. Please pick another email.",type:""}
    console.log(response.data);
  }).catch(function (error) {
    console.log(error);
  });
  }

  render() {
    return (
      <div>

        <h3>Sign-up</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>
            Name:
            <input type="text" name="name" placeholder="Name" value={this.state.formValues["name"]} onChange={this.handleChange.bind(this)}/>
          </label><br/>
          <label>
            Phone:
            <input type="tel" name="phone" placeholder="Phone" value={this.state.formValues["phone"]} onChange={this.handleChange.bind(this)}/>
          </label><br/>

          <label>
            E-mail:
            <input type="email" name="email" placeholder="E-mail" value={this.state.formValues["email"]} onChange={this.handleChange.bind(this)}/>
          </label><br/>
          <label>
            Password:
            <input type="password" name="password" placeholder="Password" value={this.state.formValues["password"]} onChange={this.handleChange.bind(this)}/>
          </label><br/>
          <label>
            Confirm Password:
            <input type="password" name="confirmPassword" placeholder="Confirm Password" value={this.state.formValues["confirmPassword"]} onChange={this.handleChange.bind(this)}/>
          </label><br/>
          <label>
            I want to be:
          <select name="type" value={this.state.formValues["type"]} onChange={this.handleChange.bind(this)}>
            <option selected value="Mentee">Mentee</option>
            <option value="Mentor">Mentor</option>
            <option value="Both">Both</option>
          </select>
          </label><br/>
          <input className="btn btn-primary" type="submit" value="Submit"/>
        </form>
      </div>

    )
  }
}
