import './css/navbar.css'
import {
    Link,
} from 'react-router-dom';
function Navbar(){
    return(
        <div class='navbar'>
            <Link to='/home' class="links">Home</Link>
            <Link to='/notes' class="links">Notes</Link>
            <Link to='/create' class="links">Create Note</Link>
        </div>
    )
}
export default Navbar;