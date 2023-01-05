import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux'
import { Route, Routes, unstable_HistoryRouter as HistoryRouter } from "react-router-dom"
import { createBrowserHistory } from 'history'
import HomeTemplate from './Template/HomeTemplate';

import { store } from './Redux/configStore';
import Home from './Pages/Home/Home';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

export const history: any = createBrowserHistory()

root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Routes>
      <Route index element={<Home />}></Route>
        <Route path='' element={<HomeTemplate />}>
          

        </Route>
      </Routes>
    </HistoryRouter>



  </Provider>

);


