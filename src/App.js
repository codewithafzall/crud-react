import './App.css';
import Create from './components/Create';
import Read from './components/Read';
import Header from './components/Header';
import Update from './components/Update';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';


function App() {
  return (
    <div>
      
      <Router>
      <Header/>
        <Switch>
          <Route exact path="/" component={Create} />
          <Route path='/read' component={Read} />
          <Route path="/update" component={Update} />
        </Switch>
      </Router>


    
    </div>
  );
}

export default App;
