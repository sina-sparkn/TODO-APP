import "../../dist/output.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ItemUpdated } from "../features/itemSlicer";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function EditTask() {
  const { id } = useParams();
  const [content, setContent] = useState();
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.items);
  const nightModeStatus = useSelector((state) => state.nightMode);

  let theContent;
  tasks.map((e) => {
    if (e.id === id) {
      theContent = e.content;
    }
  });

  function editbuttonClicked() {
    if (content) {
      dispatch(ItemUpdated({ id: id, content: content }));
    }
  }

  let styles;
  if (nightModeStatus) {
    styles = {
      main: "h-full bg-zinc-900 text-white flex flex-col gap-10 items-center justify-center",
      input:
        "outline-none bg-zinc-900 border border-zinc-700 rounded-lg py-2 px-4",
      button:
        "bg-blue-600 rounded-lg px-5 py-2 hover:bg-blue-700 duration-300 disabled:text-slate-400 disabled:bg-slate-800",
    };
  } else {
    styles = {
      main: "h-full flex flex-col gap-10 items-center justify-center",
      input: "outline-none border border-gray-500 rounded-lg py-2 px-4",
      button:
        "border border-blue-600 rounded-lg px-5 py-2 hover:bg-blue-600 hover:text-white duration-300 disabled:bg-white disabled:border-slate-400 disabled:text-slate-400",
    };
  }

  return (
    <div className={styles.main}>
      {content ? (
        <h1 className="text-3xl">{content}</h1>
      ) : (
        <h1 className="text-3xl">{theContent}</h1>
      )}

      <div className="flex gap-2">
        <input
          className={styles.input}
          type="text"
          onChange={(e) => setContent(e.target.value)}
        />
        <Link to={`/tasks/${id}`}>
          {content ? (
            <button className={styles.button} onClick={editbuttonClicked}>
              Edit Task
            </button>
          ) : (
            <button
              className={styles.button}
              disabled={true}
              onClick={editbuttonClicked}
            >
              Edit Task
            </button>
          )}
        </Link>
      </div>
    </div>
  );
}

export default EditTask;
