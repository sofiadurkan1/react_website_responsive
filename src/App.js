import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import GlobalStyles from "./globalStyles";
import{ Navbar } from "./components"
import Home from "./pages/HomePage/Home"

function App() {
  return (
    <Router>
      <GlobalStyles/>
      <Navbar/>
      <Switch>

      </Switch>
      <Route path = "/" exact component = {Home}/>
     
      
    </Router>
  );
}

export default App;
