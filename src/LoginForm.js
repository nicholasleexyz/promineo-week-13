import { useState } from 'react';
import './App.css';

function LoginForm() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState(''); // The password would need special handling such as only storing the hash of it.

  function handleSubmit(e) {
    e.preventDefault();

    console.log("User: " + userName);
    console.log("Password: " + password);
  }

  return (
    <div className='loginItems'>
        <h3>Log In</h3>
        <form onSubmit={handleSubmit}>
          <div className="inputs">
            <div className="">
              <label>Username</label>
              <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)}/>
            </div>
            <div className="">
              <label>Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
    </div>
  );
}
  // const [name, setName] = useState("");

  // return (
  //   <form>
  //     <label>Enter your name:
  //       <input
  //         type="text" 
  //         value={name}
  //         onChange={(e) => setName(e.target.value)}
  //       />
  //     </label>
  //   </form>
  // )
export default LoginForm;
