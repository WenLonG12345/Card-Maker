import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/login/login';
import styles from './app.module.css';
import Maker from './components/maker/maker';
import ParticlesBg from 'particles-bg';

function App({ FileInput, authService, cardRepository }) {
  return (
    <>
      <div className={styles.loginWrap}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <ParticlesBg
                type='polygon'
                bg={{ position: 'absolute', zIndex: 0, top: 0, left: 0 }}
              />
              <Login authService={authService} />
            </Route>
            <Route path='/maker'>
              <Maker
                FileInput={FileInput}
                authService={authService}
                cardRepository={cardRepository}
              />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
