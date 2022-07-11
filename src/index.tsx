import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.scss';
import VehiclesPage from './pages/Vehicles';
import reportWebVitals from './reportWebVitals';

import {FormProvider} from './providers/FormProvider';
import {FiltersProvider} from './providers/FiltersProvider';


import FormPage from './pages/Form';
import FiltersPage from './pages/Filters';
import MainPage from './pages/Main'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>

      <FormProvider>
        <FiltersProvider>
          <MainPage />
        </FiltersProvider>
      </FormProvider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
