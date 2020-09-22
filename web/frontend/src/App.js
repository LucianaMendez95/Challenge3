import React from 'react';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import Register from './pages/Register';
import About from './pages/About';
import Shop from './pages/Shop';
import Header from './components/Header';
import AddItem from './pages/AddItem'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import authActions from './redux/actions/authActions'
import { connect } from 'react-redux'
import './styles/styles.css'
import './styles/RegisterLogIn.css'
import LogOut from './components/LogOut';


function App(props) {
  console.log(localStorage.getItem('token'))
  if (props.token || localStorage.getItem('token')) {
    var myRoutes =
      (<Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/additem" component={AddItem} />
        <Route path="/logOut" component={LogOut} />
        <Redirect to="/" />
      </Switch>
      )
  } else {
    var myRoutes = (<Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={LogIn} />
      <Route exact path="/about" component={About} />
      <Route exact path="/shop" component={Shop} />
      <Route exact path="/additem" component={AddItem} />
      <Redirect to="/" />
    </Switch>
    )
  }
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          {myRoutes}
        </Switch>
      </BrowserRouter>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    token: state.authReducer.token
  }
}
const mapDispatchToProps = {
  forcedLogIn: authActions.forcedLogIn
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
