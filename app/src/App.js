import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import UsersList from './components/UsersList'
import About from './components/About'
import { Link, Route } from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
    this.state = {
      users: [],
      username: '',
      email: '',
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
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <Route path={`/about`} component={About}/>
              <Route exact path={`/`} render={() => <UsersList users={this.state.users} />}/>
              <Link to={`/about`}>About</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
