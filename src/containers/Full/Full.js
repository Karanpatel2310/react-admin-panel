import { Container } from 'reactstrap';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import React, { Component } from 'react';

import Aside from '../../components/Aside/Aside';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import Dashboard from '../../views/Dashboard/Dashboard';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import UserList from '../../views/User/List/List';
import Create from '../../views/User/Create/Create';

class Full extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props} />
          <main className="main">
            <Breadcrumb />
            <Container fluid>
              <Switch>
                <Route path="/dashboard" name="Dashboard" component={Dashboard} />
                <Route path="/user/create" name="Create" component={Create} />
                <Route path="/user" name="User" component={UserList}/>
                <Redirect from="/" to="/dashboard" />
              </Switch>
            </Container>
          </main>
          <Aside />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Full;
