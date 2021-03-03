import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';


function App() {
  return (
    <Router>
      <Route exact path={'/home'} component={Home}/>
      <Route exact path={'/about'} component={About}/>
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
