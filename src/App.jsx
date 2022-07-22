import { Route, Router, Routes } from "react-router-dom";
import BaseMerged from "./components/merger";
import OneTask from "./components/oneTaskPage";
import NotFound from "./notFound/404";
import EditTask from "./components/editTask";
import "../dist/output.css";

function App() {
  return (
    <Routes path="/">
      <Route index element={<BaseMerged />} />
      <Route path="tasks">
        <Route index element={<NotFound />} />
        <Route path=":id" element={<OneTask />} />
      </Route>
      <Route path="editTasks">
        <Route index element={<NotFound />} />
        <Route path=":id" element={<EditTask />} />
      </Route>
      {/* <Route exact path="/tasks/:taskID" element={<OneTask />} /> */}
    </Routes>
  );
}

export default App;
