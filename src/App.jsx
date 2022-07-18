import ItemList from "./components/ItemList";
import AddItem from "./components/addItem";
import "../dist/output.css";

function App() {
  return (
    <div className="relative w-full h-full flex justify-center items-center gap-10 py-10 bg-gradient-to-br from-blue-500 to-indigo-700">
      <div className="centerContainer w-96 shrink h-full flex flex-col gap-5 px-4 pl-7 py-7 bg-white rounded-md overflow-y-scroll">
        <AddItem />
        <ItemList />
      </div>
    </div>
  );
}

export default App;
