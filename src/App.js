import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

export default class App extends Component {
  apiKey=process.env.REACT_APP_NEWS_API;
  render() {
    return (
      <div>
         <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<News apiKey={this.apiKey} key='general' country='in' category='general' />}></Route>
            <Route path='/Business' element={<News apiKey={this.apiKey} key='business' country='in' category='business' />}></Route>
            <Route path='/Entertainment' element={<News apiKey={this.apiKey} key='entertainment' country='in' category='entertainment' />}></Route>
            <Route path='/Health' element={<News apiKey={this.apiKey} key='health' country='in' category='health' />}></Route>
            <Route path='/Science' element={<News apiKey={this.apiKey} key='science' country='in' category='science' />}></Route>
            <Route path='/Sports' element={<News apiKey={this.apiKey} key='sports' country='in' category='sports' />}></Route>
            <Route path='/Technology' element={<News apiKey={this.apiKey} key='technology' country='in' category='technology' />}></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
