import React  from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {DataProvider} from './Context'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <DataProvider>
   <App />
  </DataProvider>
   
  </>
);

