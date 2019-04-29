import React from "react";

export class SignInComponent extends React.Component {
    render() {
        return (
            <h1> Sign in </h1>
        );
    }
}

// render() {
//     const { username, password, errorMessage } = this.state;
//     return (
//       <form className="form-signin" onSubmit={this.submit}>
//         <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
//         <label htmlFor="inputUsername" className="sr-only">Username</label>
//         <input type="text" id="inputUsername" name="username"
//           className="form-control" placeholder="Username"
//           required value={username} onChange={this.updateUsername} />

//         <label htmlFor="inputPassword" className="sr-only">Password</label>
//         <input type="password" id="inputPassword" name="password"
//           className="form-control" placeholder="Password"
//           required value={password} onChange={this.updatePassword} />

//         <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
//         <p id="login-error">{errorMessage}</p>
//       </form>
//     );
//  }