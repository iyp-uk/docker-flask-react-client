import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import UsersList from './components/UsersList'
import About from './components/About'
import { Route, Switch } from 'react-router-dom'
import NavBar from './components/NavigationBar'
import LoginRegister from './components/LoginRegister'
import { BrowserRouter as Router } from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
    this.state = {
      users: [],
      username: '',
      email: '',
      title: 'iyp-uk/docker-flask-react-client',
      formData: {
        username: '',
        email: '',
        password: ''
      }
    }
  }
  componentDidMount() {
    this.getUsers();
  }
  getUsers() {
    axios.get(`${process.env.REACT_APP_USERS_SERVICE_URL}/users`)
    .then((res) => { this.setState({users: res.data.data.users}) })
    .catch((err) => {})
  }
  addUser(event) {
    event.preventDefault();
    const data = {
      username: this.state.username,
      email: this.state.email
    }
    axios.post(`${process.env.REACT_APP_USERS_SERVICE_URL}/users`, data)
    .then(() => {
      this.getUsers();
      this.setState({ username: '', email: '' });
    })
    .catch((err) => {})
  }
  handleChange(event) {
    const obj = {};
    obj[event.target.name] = event.target.value;
    this.setState(obj);
  }
  handleFormChange(event) {
    const obj = this.state.formData;
    obj[event.target.name] = event.target.value;
    this.setState(obj);
  }
  handleUserFormSubmit(event) {
    event.preventDefault();
  }
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar title={this.state.title}/>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <Switch>
                  <Route exact path={`/`} render={() => <UsersList users={this.state.users} />}/>
                  <Route exact path={`/login`} render={() => (
                    <LoginRegister
                      formType={'Login'}
                      formData={this.state.formData}
                      handleUserFormSubmit={this.handleUserFormSubmit.bind(this)}
                      handleFormChange={this.handleFormChange.bind(this)}
                    />
                  )} />
                  <Route exact path={`/register`} render={() => (
                    <LoginRegister
                      formType={'Register'}
                      formData={this.state.formData}
                      handleUserFormSubmit={this.handleUserFormSubmit.bind(this)}
                      handleFormChange={this.handleFormChange.bind(this)}
                    />
                  )} />
                  <Route path={`/about`} component={About}/>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
