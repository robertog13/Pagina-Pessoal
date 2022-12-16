import './App.css';
import { Route, Switch } from 'react-router-dom';
import MainPage from './Pages/MainPAge/MainPage';
import About from './Pages/About/About';
import Projects from './Pages/Projects/Projects';


function App() {
  return (
    <Switch>
      <Route path="/" component={ MainPage } exact />
      <Route path="/about" component={ About } />
      <Route path="/projects" component={ Projects } />
    </Switch>
  );
}

export default App;
