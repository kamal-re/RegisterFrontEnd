import React from "react";
import { Switch, Route, Redirect,BrowserRouter as Router } from "react-router-dom";
import Demo from './Coach';
import { Coach_form } from './Coach_form';

function App() {

return(
  <>
  <Router>

      <Switch>
        <Route exact path="/" component={ Demo } />
        <Route exact path="/Coach_form" component={Coach_form}/>
        <Route exact path="/Coach_form/:coachId/:user/:qualification/:coach_blog/:coach_desc" component={Coach_form}/>
        <Redirect to="/" />
      </Switch>
      </Router> 
  </>
);
}

export default App;