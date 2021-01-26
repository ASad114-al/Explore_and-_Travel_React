import  Navgation from './Components/ Navgation';
import Home from './Components/Home';
import About from './Components/about';
import Partner from './Components/partner';
import Destinations from './Components/Destinations';


import Footer from './Components/footer';
import './App.css'



import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

function App() {
  return (
    
    <Router>
    <Navgation/>
    <Switch>
      <Route path="/Home" exact>
        <Home />
      </Route>
      <Route path="/Destinations" exact>
        <Destinations />
      </Route>

      <Route path="/about" component={About} exact />

      <Route path="/partner" component={Partner} exact />
    </Switch>
    <Footer/>

  </ Router>
);

  

}

export default App;
