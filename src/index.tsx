import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Table from "./table/index";
import Parent from "./hooks/sample";
import UseStateSample from "./hooks/useStateSample";
import UseMemoSample from "./hooks/useMemoSample";
import UseCallbackSampleContainer from "./hooks/useCallbackSample";
import UseEffectSample from "./hooks/useEffectSamle";
import UseRefSample from "./hooks/useRefSample";
import UseReducerSample from "./hooks/useReducerSample";
import "./css/style.css";
import MyModal from "./components/MyModal";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <details>
      <summary>最初の学習</summary>
      {/* <App /> */}
      <Table />
      <hr />
      <Parent label="sample"></Parent>
      <hr />
      <UseStateSample></UseStateSample>
      <hr />
      <UseMemoSample></UseMemoSample>
      <hr />
      <UseCallbackSampleContainer></UseCallbackSampleContainer>
      <hr />
      <h3>useEffect</h3>
      <UseEffectSample></UseEffectSample>
      <h3>useRef</h3>
      <UseRefSample></UseRefSample>
      <h3>useReducer</h3>
      <UseReducerSample></UseReducerSample>
    </details>
    {/* モーダル */}
    <details open>
      <MyModal></MyModal>
    </details>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
