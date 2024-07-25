import React, { useState } from "react";
import Layout from "../Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useAuth } from "../../Context/Auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const clientId = '856039329510-k97p803k5oi5cv9o6msreijpba5779i1.apps.googleusercontent.com';
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();

  const onSuccess = (res) => {
    console.log('Login Success:', res);
    toast.success('Login successful!');
  };

  const onFailure = (error) => {
    console.error('Login Failure:', error);
    toast.error('Login failed. Please try again.');
  };

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/v1/auth/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify({
          user: res.data.user,
          token: res.data.token,
        }));
        navigate("/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title="Register - Ecommer App">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h4 className="title">Welcome back! Access your account now</h4>

          <div className="mb-3 mt-5">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email "
              required
            />
          </div>
          <div className="mb-3 mt-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            LOGIN
          </button>
          <div id="signInButton" className="mt-2">
            <GoogleOAuthProvider clientId={clientId}>
              <GoogleLogin
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_origin"}
                isSignedIn={true}
              />
            </GoogleOAuthProvider>
          </div>
          <p className="mt-3 text-center">
            If Don't have an account? <Link to="/register"> Register</Link>
          </p>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
