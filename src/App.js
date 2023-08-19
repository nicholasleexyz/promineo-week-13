import './App.css';
import LoginForm from './LoginForm';
import NavBar from './NavBar';

function App() {
  return (
    <>
      <NavBar></NavBar>
      <div className='content'>
        <div className="loginContainer">
          <LoginForm></LoginForm>
        </div>
      </div>
    </>
  );
}

export default App;
