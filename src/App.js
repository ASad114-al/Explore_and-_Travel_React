import  Navgation from './Components/ Navgation';
// import homes from './Components/home';
// import about from './Components/about';
// import faq from './Components/faq';
import Footer from './Components/footer';
import './App.css'



import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

function App() {
  return (
    // <> </>
  <Router>
  
 <Navgation/>
   
    <Switch>
      <Route path="/">
        <homes />
      </Route>
      <Route path="/about">
        <about />
      </Route>
      <Route path="/faq">
        <faq />
      </Route>
    </Switch>
    <Footer/>
 
</Router>
);

  

}

export default App;
