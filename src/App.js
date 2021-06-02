
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddMovie from './components/AddMovie';
import MovieList from './components/MovieList';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/Login';
import Details from './components/Details';


function App() {

  
  return (
    <div className="App">
    <Router>
    <NavBar/>
    <Switch>
    <Route path="/" exact component={MovieList}/>
    <Route path="/add" component={AddMovie}/>
    <Route path="/login" component={Login}/>
    <Route path="/:id" render={(props) => <Details mob {...props}/>}/>
    </Switch>
    </Router>
    </div>
  );
}

export default App;
