import './App.css';

function LoginForm() {
  return (
    <div className='loginItems'>
        <h3>Log In</h3>
        <div className="inputs">
          <div className="">
            <span>Username</span>
            <input type="text" />
          </div>
          <div className="">
            <span>Password</span>
            <input type="text" />
          </div>
        </div>
        <button type="button">Submit</button>
    </div>
  );
}

export default LoginForm;
