import ItemList from "./components/ItemList";
import AddItem from "./components/addItem";
import { Route, Routes } from "react-router-dom";
import "../dist/output.css";

const styles = {
  main: "relative w-full h-full flex justify-center items-center gap-10 py-10 bg-gradient-to-br from-blue-500 to-indigo-700",
  container:
    "centerContainer w-96 shrink h-full flex flex-col gap-5 px-4 pl-7 py-7 bg-white rounded-md overflow-y-scroll",
};

function App() {
  return (
    <Routes path="/">
      <Route
        index
        element={
          <main className={styles.main}>
            <div className={styles.container}>
              <AddItem />
              <ItemList />
            </div>
          </main>
        }
      />
    </Routes>
  );
}

export default App;
