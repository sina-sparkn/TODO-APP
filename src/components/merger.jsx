import ItemList from "./ItemList";
import AddItem from "./addItem";
import "../../dist/output.css";

const styles = {
  main: "relative w-full h-full flex justify-center items-center gap-10 py-10 bg-gradient-to-br from-blue-500 to-indigo-700",
  container:
    "centerContainer w-96 shrink h-full flex flex-col gap-10 px-4 pl-7 py-7 bg-white rounded-md overflow-y-scroll",
  header: "",
};

function BaseMerged() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
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

export default BaseMerged;
