import "../../dist/output.css";
import { useState, useEffect } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { itemAdded } from "../features/itemSlicer";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

const styles = {
  main: "w-full h-12 flex justify-center items-center gap-3",
  input:
    "outline-none px-6 pr-12 h-12 border border-blue-300 rounded-full grow hover:border-blue-500 hover:border-2 duration-300",
  addButton:
    "h-12 bg-yellow-400 rounded-md hover:bg-yellow-500 duration-300 grow justify-center",
  removeButton:
    "h-12 bg-red-500 rounded-md hover:bg-red-600 duration-300 text-white grow",
};

function AddItem() {
  const [content, setContent] = useState();
  const dispatch = useDispatch();

  const InputChanged = (event) => setContent(event.target.value);

  function AddBtnClicked() {
    if (content) {
      dispatch(
        itemAdded({
          id: nanoid(),
          content,
        })
      );

      setContent("");
    }
    setContent("");
  }

  return (
    <div className={styles.main}>
      <div className="flex w-full rounded-full items-center relative">
        <input
          type="text"
          value={content}
          className={styles.input}
          onChange={InputChanged}
        />
        <BsFillArrowDownCircleFill
          className="text-blue-500 text-3xl absolute right-2.5 cursor-pointer hover:text-blue-600 duration-300"
          onClick={AddBtnClicked}
        />
      </div>

      {/* <div className="flex gap-3 w-1/3 ">
        <button className={styles.addButton} onClick={AddBtnClicked}>
          Add Task
        </button>
        <button className={styles.removeButton} onClick={RemoveBtnClicked}>
          CleanUp
        </button>
      </div> */}
    </div>
  );
}
export default AddItem;
