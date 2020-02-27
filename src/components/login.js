
import React from 'react';
import { connect } from 'react-redux';
import { Field, Form } from 'react-redux-form';


class Login extends React.Component {
    state = {
        user:[],
        
    }
  handleSubmit(user) {
    //  let { dispatch } = this.props;

    // Do whatever you like in here.
    // You can use actions such as:
    //  dispatch(user);
    console.log(user,"hhhh");
    // etc.
  }
  render() {
   
    return (
      <Form model="user"
        onSubmit={(user) => this.handleSubmit(user)}>
        <Field model="user.email">
          <label>Email:</label>
          <input type="email" />
        </Field>

        <Field model="user.pass">
          <label>Password:</label>
          <input type="pass" />
        </Field>

        <button type="submit" onClick={this.state.handleSubmit}>Login
         
        </button>
      </Form>
    );
  }
}

function mapDispatchToProps(state) {
  return { user: state.user };
}

export default connect(mapDispatchToProps)(Login);