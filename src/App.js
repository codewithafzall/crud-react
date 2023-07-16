

import {BrowserRouter as Router,Switch ,Route} from 'react-router-dom';
import './App.css';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
    <Router>
       <Header/>
       <Switch> 
        <Route exact path="/"><Create/></Route>
         <Route path="/Read"><Read/></Route>
       </Switch>
    </Router>
    </div>
  );
}

export default App;
