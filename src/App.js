import './App.css';
import { getAuth } from "firebase/auth";
import app from './firebase/firebase.init';
import RegisterReactBootstrap from './Components/RegisterReactBootstrap';


const auth = getAuth(app);

const handleRegister = (event) => {
  event.preventDefault();
  const email = event.target.email.value;
  const password = event.target.password.value
  console.log(email, password);

}
const handleEmailBlur = event => {
  console.log(event.target.value);
}
const handlePasswordBlur = event => {
  console.log(event.target.value);
}

function App() {
  return (
    <div>
      <RegisterReactBootstrap></RegisterReactBootstrap>
    </div>
  );
}

export default App;
