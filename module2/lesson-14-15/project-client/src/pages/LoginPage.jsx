import { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

 
function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  
  const navigate = useNavigate();
 
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
 
  const { storeUserData, authenticateUser } = useContext(AuthContext)
  
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // const requestBody = { email, password };
 
    axios.get('http://localhost:5005/users')
      .then(({ data }) => {
        const user = data.find(user => user.email === email) // user object {email: '...', password: '...'} or null

        if(user) {
            if(user.password === password) {
              const userData = JSON.stringify({email: user.email, username: user.username, id: user.id})
              console.log('user', userData)
              storeUserData(userData)   
              authenticateUser()
              navigate('/');
            }
            else {
              const errorDescription = 'Password entered is incorrect'
              setErrorMessage(errorDescription)
            }
        }
        else {
          const errorDescription = 'User was not found'
          setErrorMessage(errorDescription)
        }
           
      })
      .catch((error) => {
        console.log(error)
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      })
  };
  
  return (
    <div className="LoginPage">
      <h1>Login</h1>
 
      <form onSubmit={handleLoginSubmit}>
        <label>Email:</label>
        <input 
          type="email"
          name="email"
          value={email}
          onChange={handleEmail}
        />
 
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />
 
        <button type="submit">Login</button>
      </form>
      { errorMessage && <p className="error-message">{errorMessage}</p> }
 
      <p>Don't have an account yet?</p>
      <Link to={"/signup"}> Sign Up</Link>
    </div>
  )
}
 
export default LoginPage;