import Navbar from "./components/navbar";

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Home from "./components/home";
import Notes from "./components/notes";
import Create from "./components/create";

function App() {
  return(
    <Router>
      <Navbar />

      <Route path='/home'>
        <Home />
      </Route>

      <Route path='/notes'>
        <Notes />
      </Route>

      <Route path='/create'>
        <Create />
      </Route>
    </Router>
  )
}

export default App;