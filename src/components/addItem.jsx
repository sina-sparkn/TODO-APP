import "../../dist/output.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemAdded } from "../features/itemSlicer";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

const styles = {
  main: "w-full h-12 flex flex-col justify-center items-center gap-3",
  input:
    "outline-none px-6 pr-12 h-12 border border-blue-300 rounded-full grow hover:border-blue-500 hover:border-2 duration-300",
  addButton:
    "h-12 bg-yellow-400 rounded-md hover:bg-yellow-500 duration-300 grow justify-center",
  removeButton:
    "h-12 bg-red-500 rounded-md hover:bg-red-600 duration-300 text-white grow",
};

function AddItem() {
  const [content, setContent] = useState();
  const [userId, setUserId] = useState();

  const allUsers = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const InputChanged = (event) => setContent(event.target.value);
  const userOptionChanged = (event) => setUserId(event.target.value);

  function AddBtnClicked() {
    if (content) {
      dispatch(itemAdded(content, userId));
      setContent("");
      setUserId("");
    }
  }

  const canSave = Boolean(content) && Boolean(userId);

  const userOptions = allUsers.map((user) => (
    <option value={user.id} key={user.id}>
      {user.name}
    </option>
  ));

  return (
    <div className={styles.main}>
      <div className="flex w-full gap-2 rounded-full items-center relative">
        <input
          type="text"
          value={content}
          className={styles.input}
          onChange={InputChanged}
        />
        {/* <BsFillArrowDownCircleFill
          type="button"
          className="text-blue-500 text-3xl absolute right-2.5 cursor-pointer hover:text-blue-600 duration-300"
          onClick={AddBtnClicked}
          disabled={!canSave}
        /> */}
        <button
          className="bg-blue-500 rounded-lg px-3 py-3 flex text-white cursor-pointer hover:bg-blue-600 disabled:bg-slate-400 disabled:cursor-default duration-300"
          disabled={!canSave}
          onClick={AddBtnClicked}
        >
          save
        </button>
      </div>
      <select
        value={userId}
        onChange={userOptionChanged}
        className="w-full border border-blue-300 rounded-full px-3 py-2 outline-none"
      >
        <option value=""></option>
        {userOptions}
      </select>
    </div>
  );
}
export default AddItem;
