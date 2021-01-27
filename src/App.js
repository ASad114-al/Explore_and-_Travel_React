import  Navgation from './Components/ Navgation';
import Home from './Components/Home';
import About from './Components/about';
import Partner from './Components/partner';
import Destinations from './Components/Destinations';
import Footer from './Components/footer';
import Header from './Components/Header';
import './App.css'



import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    
    <Router>
    < Navgation />

    <Header />
    
    <Switch>
      <Route path="/" exact >
        <Home />
      </Route>
      <Route path="/Destinations" >
        <Destinations />
      </Route>

      <Route path="/about" component={About}  />

      <Route path="/partner" component={Partner}  />
    </Switch>
    <Footer/>

  </ Router>
);

  

}

export default App;