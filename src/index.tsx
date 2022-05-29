import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Table from './table/index'
import Parent from './hooks/sample';
import UseStateSample from './hooks/useStateSample';
import UseMemoSample from './hooks/useMemoSample';
import UseCallbackSampleContainer from './hooks/useCallbackSample';
import UseEffectSample from './hooks/useEffectSamle';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Table />
    <hr />
    <Parent label='sample'></Parent>
    <hr />
    <UseStateSample></UseStateSample>
    <hr />
    <UseMemoSample></UseMemoSample>
    <hr />
    <UseCallbackSampleContainer></UseCallbackSampleContainer>
    <hr />
    <UseEffectSample></UseEffectSample>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
