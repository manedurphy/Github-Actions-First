import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={'/'} component={Home}/>
        <Route exact path={'/about'} component={About}/>
      </Switch>
    </Router>
  )
}

function Home() {
  return (
    <h1>This is the home page</h1>
  )
}

function About() {
  return (
    <h1>This is the about page</h1>
  )
}

export default App;
