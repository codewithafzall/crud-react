import './App.css';
import Create from './components/Create';
import Read from './components/Read';
import Header from './components/Header';
import Update from './components/Update';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';


function App() {
  return (
    <div>
      
     <Header/>
     <section id='create'>
      <Create/>
     </section>
     <section id='read'>
      <Read/>
     </section>
     <section id='update'>
      <Update/>
     </section>


    
    </div>
  );
}

export default App;
