import { Route, Switch } from "react-router-dom";
import Homepage from './Homepage';
import Chatpage from './Chatpage';
import Login from './authentication/Login';
import Signup from './authentication/Signup';
import Error from './Error';
import {LoginMain} from "./authentication/LoginMain";
import SignupMain from "./authentication/SignupMain";
function App() {
  return (
    <div>
      <Switch>
        <Route path='/' component={Homepage} exact/>
        <Route path='/chats' component={Chatpage} />
        <Route path='/login'><LoginMain/></Route> 
        <Route path='/signup'><SignupMain/></Route>
        <Route path='*'><Error/></Route>
      </Switch>
    </div>
  );
}
export default App;
