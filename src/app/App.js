import NavBar from "./components/navBar";
import {Route, Switch, Redirect} from 'react-router-dom';
import Dashboard from "./components/dashboard";
import Login from "./components/login";
import Home from "./components/home";
import Posts from "./components/posts";
import NotFound from "./components/not-found";

function App() {
  return (
    <div className="App">
      <NavBar/>
    <h1>App</h1>
        <Switch>
          <Route path='/dashboard' component={Dashboard}/>
          <Route path='/posts/:postId?' component={Posts}/>
          <Route path='/login' component={Login}/>
          <Route path='/' exact component={Home}/>
          <Redirect from='/admin' to='/dashboard'/>
          <Route path='/404' component={NotFound}/>
          <Redirect to='/404'/>

        </Switch>
    </div>

  );
}

export default App;
