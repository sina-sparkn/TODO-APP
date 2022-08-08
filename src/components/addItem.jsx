import "../../dist/output.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemAdded } from "../features/itemSlicer";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { nightMode } from "../features/night-mode/nightMode";

const styles = {
  main: "w-full h-12 flex flex-col justify-center items-center gap-3",
  input:
    "outline-none px-6 pr-12 h-12 border border-blue-300 rounded-full grow hover:border-blue-500 hover:border-2 duration-300",
  inputDark:
    "outline-none text-white caret-zinc-500 px-6 pr-12 h-12 border border-zinc-700 bg-zinc-900 rounded-full grow hover:border-blue-500 hover:border-2 duration-300",
  addButton:
    "rounded-full cursor-pointer absolute right-2.5 text-blue-500 hover:text-blue-600 disabled:text-slate-400 disabled:cursor-default duration-300",
  removeButton:
    "h-12 bg-red-500 rounded-md hover:bg-red-600 duration-300 text-white grow",
};

function AddItem() {
  const [content, setContent] = useState();
  const [userId, setUserId] = useState();

  const allUsers = useSelector((state) => state.users);
  const nightModeStatus = useSelector((state) => state.nightMode);
  const dispatch = useDispatch();

  const InputChanged = (event) => setContent(event.target.value);
  const userOptionChanged = (event) => setUserId(event.target.value);

  const AddBtnClicked = () => {
    if (content) {
      dispatch(itemAdded(content, userId));
      setContent("");
      setUserId("");
    }
  };

  const canSave = Boolean(content) && Boolean(userId);

  let userOptions;
  if (nightModeStatus) {
    userOptions = allUsers.map((user) => (
      <option value={user.id} key={user.id} className="bg-zinc-900 text-white">
        {user.name}
      </option>
    ));
  } else {
    userOptions = allUsers.map((user) => (
      <option value={user.id} key={user.id}>
        {user.name}
      </option>
    ));
  }

  if (nightModeStatus) {
    return (
      <div className={styles.main}>
        <div className="flex w-full gap-2 rounded-full items-center relative">
          <input
            type="text"
            value={content}
            className={styles.inputDark}
            onChange={InputChanged}
          />
          <button
            className={styles.addButton}
            disabled={!canSave}
            onClick={AddBtnClicked}
          >
            <BsFillArrowDownCircleFill className="text-3xl" />
          </button>
        </div>
        <select
          value={userId}
          onChange={userOptionChanged}
          className="w-full border border-zinc-700 text-white bg-zinc-900 rounded-full px-3 py-2 outline-none hover:border-blue-500 hover:border-2  duration-300"
        >
          <option value="" className="bg-zinc-900"></option>
          {userOptions}
        </select>
      </div>
    );
  } else {
    return (
      <div className={styles.main}>
        <div className="flex w-full gap-2 rounded-full items-center relative">
          <input
            type="text"
            value={content}
            className={styles.input}
            onChange={InputChanged}
          />
          <button
            className={styles.addButton}
            disabled={!canSave}
            onClick={AddBtnClicked}
          >
            <BsFillArrowDownCircleFill className="text-3xl" />
          </button>
        </div>
        <select
          value={userId}
          onChange={userOptionChanged}
          className="w-full border border-blue-300 rounded-full px-3 py-2 outline-none hover:border-blue-500 hover:border-2 duration-300"
        >
          <option value=""></option>
          {userOptions}
        </select>
      </div>
    );
  }
}
export default AddItem;
