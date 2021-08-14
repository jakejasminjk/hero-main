//import logo from './logo.svg';
import './App.css';
import React, { Fragment, useEffect, useState } from 'react';
import { Route } from "react-router-dom";
import {
  CssBaseline,
  withStyles,
} from '@material-ui/core';

import ListHero from './pages/ListHero'
import Home from './pages/Home'

const App = () => {
  const [heros, setHeros] = useState([])

  useEffect(() => {
    const getHeros = async () => {
      const allHeros = await fetchHeros()
      setHeros(allHeros)
    }
    getHeros()
  })

  const fetchHeros = async () => {
    //http://localhost:5000/hero/1/731
    const res = await fetch(`/backend/hero/1/731`)
    console.log('response', res)
    //waits for response to turn into json 
    const data = await res.json()
    console.log('data', data)
    return data
  }
  return (
    <Fragment>
      <CssBaseline />
      <main>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/list">
          <ListHero heros={heros}/>
        </Route>
      </main>
    </Fragment>
  );
}

export default App;
