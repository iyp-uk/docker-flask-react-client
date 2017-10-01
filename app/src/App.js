import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import UsersList from './components/UsersList'
import About from './components/About'
import { Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import LoginRegister from './components/LoginRegister'

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
    .catch((err) => { console.log(err); })
  }
  addUser(event) {
    event.preventDefault();
    const data = {
      username: this.state.username,
      email: this.state.email
    }
    axios.post(`${process.env.REACT_APP_USERS_SERVICE_URL}/users`, data)
    .then((res) => {
      this.getUsers();
      this.setState({ username: '', email: '' });
    })
    .catch((err) => { console.log(err); })
  }
  handleChange(event) {
    const obj = {};
    obj[event.target.name] = event.target.value;
    this.setState(obj);
  }
  render() {
    return (
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
                  />
                )} />
                <Route exact path={`/register`} render={() => (
                  <LoginRegister
                    formType={'Register'}
                    formData={this.state.formData}
                  />
                )} />
                <Route path={`/about`} component={About}/>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
