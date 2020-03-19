import React from "react";
import { connect } from "react-redux";
import { Field, Form } from "react-redux-form";

class Login extends React.Component {
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
        <div className="login-reg-panel">
          <div className="white-panel">
            <div>
              <h1>Login</h1>
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
                  <label>Email:</label>
                  <input type="email" />
                </Field>

                <Field model="user.pass">
                  <label>Password:</label>
                  <input type="pass" />
                </Field>

                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={this.state.handleSubmit}
                >
                  Login
                </button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(state) {
  return { user: state.user };
}

export default connect(mapDispatchToProps)(Login);
