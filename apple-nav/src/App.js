import React from 'react';
import { Route } from 'react-router-dom';
import NavWrapper from './Components/NavWrapper';

const App = () => {
  return (
    <div>
      <Route exact path='/' component={NavWrapper} />
      <Route path='/:id' component={NavWrapper} />
    </div>
  )
}

export default App;
