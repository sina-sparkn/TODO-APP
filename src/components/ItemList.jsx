import "../../dist/output.css";
import { useSelector } from "react-redux";
import { itemRemoved, ItemDone } from "../features/itemSlicer";
import { useDispatch } from "react-redux";
import { IoCloseCircle } from "react-icons/io5";
import { Link } from "react-router-dom";

function ItemList() {
  const Item = useSelector((state) => state.items);
  const dispatch = useDispatch();

  function closeClicked(event) {
    Item.map((e) => {
      if (e.id === event) {
        dispatch(itemRemoved(e.id));
      }
    });
  }

  function CheckBoxCahnged(event) {
    Item.map((e) => {
      if (e.id === event) {
        dispatch(ItemDone(e.id));
      }
    });
  }

  const ListItems = Item.map((item) => (
    <div
      className="w-full h-auto flex items-center justify-between bg-blue-500 p-3 pl-5 rounded-full "
      key={item.id}
    >
      <div className="flex gap-3 overflow-hidden text-ellipsis whitespace-nowrap">
        <input type="checkbox" onChange={() => CheckBoxCahnged(item.id)} />
        <Link
          to={`/tasks/${item.id}`}
          className="w-full cursor-pointer hover:p-1 duration-300"
        >
          {item.Done ? (
            <h5 className=" line-through text-white">{item.content}</h5>
          ) : (
            <h5 className="text-white">{item.content}</h5>
          )}
        </Link>
      </div>
      <div className="flex gap-2">
        <IoCloseCircle
          className="cursor-pointer text-white text-2xl ml-2"
          onClick={() => closeClicked(item.id)}
          key={item.id}
        />
      </div>
    </div>
  ));

  return (
    <main className="flex flex-col gap-2 items-center justify-center">
      {ListItems}
    </main>
  );
}

export default ItemList;
