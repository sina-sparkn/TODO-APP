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
    "rounded-full cursor-pointer absolute right-2.5 text-blue-500 hover:text-blue-600 disabled:text-slate-400 disabled:cursor-default duration-300",
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

  const AddBtnClicked = () => {
    if (content) {
      dispatch(itemAdded(content, userId));
      setContent("");
      setUserId("");
    }
  };

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
        className="w-full border border-blue-300 rounded-full px-3 py-2 outline-none hover:border-blue-500 duration-300"
      >
        <option value=""></option>
        {userOptions}
      </select>
    </div>
  );
}
export default AddItem;
