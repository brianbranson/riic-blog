import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js'
import BlogList from './content/BlogList.js'
import BlogView from './content/BlogView.js'
import { withRouter, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header></Header>
      <Route exact path="/">
        <BlogList></BlogList>
      </Route>
      <Route exact path="/BlogView">
        <BlogView></BlogView>
      </Route>
    </div>
  );
}

export default withRouter(App);
