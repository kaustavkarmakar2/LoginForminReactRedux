import React from "react";


import Store from "../store/index";




class Login extends React.Component {
    // handleSubmit(user) {
    //     let { dispatch } = this.props;
    
    //     // Do whatever you like in here.
    //     // You can use actions such as:
    //     // dispatch(actions.submit('user', somePromise));
    //     // etc.
    //   }
    render() {
       
        
        
       
        return(
       
           <div>
                <div className="imgcontainer">
                    
                </div>

                <div style={{backgroundColor:'Blue'}}>
                    <label ><b>Username</b></label>
                    <input id="uname" type="email" placeholder="Enter Username" name="uname" required/>

                    <label ><b>Password</b></label>
                    <input id="psw" type="password" placeholder="Enter Password" name="pspsw" required/>

                    <button type="submit">Login</button>
                    
                    <input type="checkbox" checked="checked" name="remember"/> 
                </div>  
                

                <div className="container" style={{backgroundColor:'Red'}}>
                    <button type="button" className="cancelbtn" onChange={e=> e.target.value} >submit</button>
                    
                </div>
                </div>
            
        )
    }

}
export default Login;