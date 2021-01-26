
import moduleName from 'module';
import { Link } from 'react-router-dom';

const Navgation = () => {
    return ( 
        <nav>
      <ul>
  <li>< Link to ="/">HOME</ Link></li>
  <li>< Link to ="/about">ABOUT</Link></li>
  <li><Link to="/faq">FAQ</Link></li>
</ul>
        </nav>
     );
}
 
export default Navgation;