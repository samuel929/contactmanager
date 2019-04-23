import React, { Component } from 'react';
import './App.css';
import {HashRouter as Router,Route,Switch} from 'react-router-dom';
import {Provider} from './context';
import Header from './Components/layout/Header';
import About from './Components/pages/About';
import AddContact from './Components/contacts/AddContact';
import EditContact from './Components/contacts/EditContact';
import NotFound from './Components/pages/NotFound';
import Contacts from './Components/contacts/Contacts';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
      <div className="App">
       <Header branding="Contact Manager"/>
       <div className="container">
         <Switch>
        <Route exact path="/" component={Contacts}/>
        <Route exact path="/contact/add" component={AddContact}/>
        <Route exact path="/contact/edit/:id" component={EditContact}/>
        <Route exact path="/about" component={About}/>
        <Route component={NotFound} />
           </Switch>
       </div>
      </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
