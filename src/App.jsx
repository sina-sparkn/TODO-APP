import { Route, Router, Routes } from "react-router-dom";
import BaseMerged from "./components/merger";
import OneTask from "./components/oneTaskPage";
import NotFound from "./notFound/404";
import "../dist/output.css";

function App() {
  return (
    <Routes path="/">
      <Route index element={<BaseMerged />} />
      <Route path="tasks">
        <Route index element={<NotFound />} />
        <Route path=":id" element={<OneTask />} s />
      </Route>
      {/* <Route exact path="/tasks/:taskID" element={<OneTask />} /> */}
    </Routes>
  );
}

export default App;
