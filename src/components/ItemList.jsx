import "../../dist/output.css";
import { useSelector } from "react-redux";
import { CgClose } from "react-icons/cg";
import { itemRemoved, ItemDone } from "../features/itemSlicer";
import { useDispatch } from "react-redux";
import { IoCloseCircle } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";

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
      className="w-full h-auto flex items-center justify-between bg-blue-200 p-3 pl-5 rounded-full"
      key={item.id}
    >
      <div className="flex gap-3">
        <input type="checkbox" onChange={() => CheckBoxCahnged(item.id)} />
        {item.Done ? (
          <h5 className="line-through text-gray-600">{item.content}</h5>
        ) : (
          <h5>{item.content}</h5>
        )}
      </div>

      <IoCloseCircle
        className="cursor-pointer text-red-400 text-2xl hover:text-red-500 duration-300"
        onClick={() => closeClicked(item.id)}
        key={item.id}
      />
    </div>
  ));

  return (
    <main className="flex flex-col gap-3 items-center justify-center">
      <h2 className="text-3xl text-blue-500"></h2>
      {ListItems}
    </main>
  );
}

export default ItemList;
