import React, { Component } from "react";

import { Field, Form } from "react-redux-form";

class sineup extends Component {
  state = {
    user: []
  };
  handleSubmit(user) {
    //  let { dispatch } = this.props;

    // Do whatever you like in here.
    // You can use actions such as:
    //  dispatch(user);
    console.log(user, "hhhh");
    // etc.
  }
  render() {
    return (
      <div>
        <div>
          <div className="login-reg-panel">
            <div className="white-panel">
              <div >
                <h1 style={{color:'black'}}>Signup to Get a call</h1>
                <Form
                  model="user"
                  style={{
                    backgroundColor: "#00005c",
                    paddingTop: "3%",
                    paddingBottom: "100px"
                  }}
                 
                  onSubmit={user => this.handleSubmit(user)}
                >
                  <Field model="user.email">
                    <label >Email:</label>
                    <input type="email"  />
                  </Field>
                  <Field model="user.service"  >
                    <label >Choose a car:</label>

                    <select id="cars" style={{backgroundColor:'white'}}>
                      <option  disabled>Choose a type of service</option>
                      <option value="saab">Saab</option>
                      <option value="opel">Opel</option>
                      <option value="audi">Audi</option>
                    </select>
                  </Field>
                  <Field model="user.phone">
                    <label>Phone Number:</label>
                    <input type="tel"  required maxLength="10"/>
                  </Field>

                  <Field model="user.pass">
                    <label>Password:</label>
                    <input type="password"   required />
                  </Field>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={this.state.handleSubmit}
                  >
                    Signup
                  </button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default sineup;
