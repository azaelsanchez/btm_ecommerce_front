import React, { Component, Fragment } from 'react';
import '../assets/css/login.css';



class Login extends Component{
    
    render(){
        return(
        
            <Fragment>
             <div className="hero">
                 <div className="form-box">
                     <div className="button-box">
                         <div id="btn"></div>
                        <button id="loginMove" type="button" className="toggle-btn" onClick="login()">Log In</button>
                        <button id="registerMove" type="button" className="toggle-btn" onClick="register()">Register</button>
                     </div>
                     <form id="login" className="input-group">
                         <input type="text" className="input-field" placeholder="E-mail" required></input>
                         <input type="text" className="input-field" placeholder="Password" required></input>
                         <input type="checkbox" className="chech-box"></input><span>Remember Password</span>
                         <Fragment></Fragment><button type="submit" className="submit-btn">Log in</button>
                    </form>
                    <form id="register" className="input-group">
                         <input type="text" className="input-field" placeholder="E-mail" required></input>
                         <input type="text" className="input-field" placeholder="Password" required></input>
                         <input type="text" className="input-field" placeholder="First Name" required></input>
                         <input type="text" className="input-field" placeholder="Last Name" required></input>
                         <input type="text" className="input-field" placeholder="Address" required></input>
                         <input type="text" className="input-field" placeholder="Postcode" required></input>
                         <input type="text" className="input-field" placeholder="City" required></input>
                         <input type="text" className="input-field" placeholder="Province" required></input>
                         <input type="text" className="input-field" placeholder="Country" required></input>
                         <input type="text" className="input-field" placeholder="Phone Number" required></input>
                         <input type="checkbox" className="chech-box"></input><span>Remember Password</span>
                         <Fragment></Fragment><button type="submit" className="submit-btn">Log in</button>
                    </form>
                 </div>
             </div>
            </Fragment>
            
        )
    }
    
}

export default Login;