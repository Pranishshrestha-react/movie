import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import NavBar from './components/navbar';
import All_pmovies from './pages/all_pmovies';
import All_tmovies from './pages/all_tmovies';
import All_umovies from './pages/all_umovies';
import './App.css';

function App() {
  return(
  <BrowserRouter>
    <NavBar />
    <div class="container-fluid">
    
      
    <Switch>
      <Route exact path="/" component ={Home} />
      <Route exact path="/all_pmovies" component ={All_pmovies} />
      <Route exact path="/all_tmovies" component ={All_tmovies} />
      <Route exact path="/all_umovies" component ={All_umovies} />


    </Switch>
    </div>
  
  </BrowserRouter>
  );
}

 
export default App;   
