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

  return (
    <div className="h-full flex flex-col gap-10 items-center justify-center">
      {content ? (
        <h1 className="text-3xl">{content}</h1>
      ) : (
        <h1 className="text-3xl">{theContent}</h1>
      )}

      <div className="flex gap-2">
        <input
          className="outline-none border border-gray-500 rounded-lg py-2 px-4"
          type="text"
          onChange={(e) => setContent(e.target.value)}
        />
        <Link to={`/tasks/${id}`}>
          <button
            className="border border-blue-600 rounded-lg px-5 py-2 hover:bg-blue-600 hover:text-white duration-300"
            onClick={editbuttonClicked}
          >
            Edit Task
          </button>
        </Link>
      </div>
    </div>
  );
}

export default EditTask;
