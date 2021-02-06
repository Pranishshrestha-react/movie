import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import NavBar from './components/navbar';
import All_pmovies from './pages/all_pmovies';
import All_tmovies from './pages/all_tmovies';
import All_umovies from './pages/all_umovies';
import './App.css';

function App() {
  return(
    <div className="body">
  <BrowserRouter>
    <NavBar />

    
      
    <Switch>
      <Route exact path="/" component ={Home} />
      <Route exact path="/all_pmovies" component ={All_pmovies} />
      <Route exact path="/all_tmovies" component ={All_tmovies} />
      <Route exact path="/all_umovies" component ={All_umovies} />


    </Switch>
  
  
  </BrowserRouter>
  </div>
  );
}

 
export default App;   
