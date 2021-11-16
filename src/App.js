import React from 'react';

import './App.css';

import Category from './components/category.js'
import Navbar from './components/navbar.js'
import Navbar1 from './components/navbar1.js'
import Navbar2 from './components/navbar-2.js'
import Search from './components/search.js'

class App extends React.Component{
  constructor(){
      super();
  };
  render(){
      return(
        <>
        <Navbar1></Navbar1>
        <Navbar2></Navbar2>
        <Search />
        <Category />
        </>
      );
  }
};
export default App;
