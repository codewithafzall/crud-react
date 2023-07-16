import './App.css';
import Create from './components/Create';
import Read from './components/Read';
import Header from './components/Header';
import Update from './components/Update';


function App() {
  return (
    <div className="App">
    <Header/>
    <Create/>
    <br/>
    <Read/>
    <br/>
    <Update/>

    
    </div>
  );
}

export default App;
