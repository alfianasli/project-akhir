import React from "react";

const Login = () => {
  return (
    <div id="card">
      <div id="card-content">
        <div id="card-title">
          <h2>Register</h2>
          <div class="underline-title"></div>
        </div>
        <form class="form">
          <label for="username">&nbsp;Username</label>
          <input
            id="username"
            class="form-content"
            type="username"
            name="username"
            required
          />
          <div class="form-border"></div>
          <label for="user-email">&nbsp;Email</label>
          <input
            id="user-email"
            class="form-content"
            type="email"
            name="email"
            autocomplete="on"
            required
          />
          <div class="form-border"></div>
          <label for="user-password">&nbsp;Password</label>
          <input
            id="user-password"
            class="form-content"
            type="password"
            name="password"
            required
          />

          <div class="form-border"></div>
          <input id="submit-btn" type="submit" name="submit" value="Register" />
          <a href="#" id="signup">
            already have an account? Sign in.
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
