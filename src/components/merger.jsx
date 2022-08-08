import ItemList from "./ItemList";
import AddItem from "./addItem";
import "../../dist/output.css";
import { useSelector, useDispatch } from "react-redux";
import { nightMode } from "../features/night-mode/nightMode";

const styles = {
  mainLight:
    "relative w-full h-full flex justify-center items-center gap-10 py-10 bg-gradient-to-br from-blue-500 to-indigo-700 duration-300",
  mainDark:
    "relative w-full h-full flex justify-center items-center gap-10 py-10 bg-gradient-to-br from-blue-900 to-indigo-900 duration-300",
  containerLight:
    "centerContainer w-96 shrink h-full flex flex-col gap-10 px-4 pl-7 py-7 bg-white rounded-md overflow-y-scroll duration-300",
  containerDark:
    "centerContainer w-96 shrink h-full flex flex-col gap-10 px-4 pl-7 py-7 bg-zinc-900 rounded-md overflow-y-scroll duration-300",
  header: "",
};

function BaseMerged() {
  const nightModeStatus = useSelector((state) => state.nightMode);
  const dispatch = useDispatch();

  function checkboxCahnged() {
    dispatch(nightMode(true));
  }

  if (nightModeStatus) {
    return (
      <main className={styles.mainDark}>
        <input type="checkbox" onChange={checkboxCahnged} />
        <div className={styles.containerDark}>
          <div className="flex gap-5 items-center justify-center mb-3">
            <img src="../../public/LOGO.svg" alt="icon" className="w-10" />
            <h1 className="text-2xl text-white font-bold cursor-default">
              Todo App
            </h1>
          </div>
          <AddItem />
          <ItemList />
        </div>
      </main>
    );
  } else {
    return (
      <main className={styles.mainLight}>
        <input type="checkbox" onChange={checkboxCahnged} />
        <div className={styles.containerLight}>
          <div className="flex gap-5 items-center justify-center mb-3">
            <img src="../../public/LOGO.svg" alt="icon" className="w-10" />
            <h1 className="text-2xl font-bold cursor-default">Todo App</h1>
          </div>
          <AddItem />
          <ItemList />
        </div>
      </main>
    );
  }
}

export default BaseMerged;
