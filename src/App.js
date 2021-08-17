import { Redirect, Route, Switch } from 'react-router-dom'
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import {Project1} from './pages/Project';
import {Project2} from './pages/Project';
import {Project3} from './pages/Project';
import {Project4} from './pages/Project';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path ='/' component ={Home}/>
        <Route exact path ='/contact' component ={Contact}/>
        <Route exact path ='/a-propos' component ={About}/>
        <Route exact path = '/projet1' component = {Project1}/>
        <Route exact path = '/projet2' component = {Project2}/>
        <Route exact path = '/projet3' component = {Project3}/>
        <Route exact path = '/projet4' component = {Project4}/>
        <Redirect to = '/'/>
      </Switch>
    </div>
  );
}

export default App;
