import "../../dist/output.css";
import { reactionAdded } from "../features/itemSlicer";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

function Reactions() {
  const dispatch = useDispatch();
  const Tasks = useSelector((state) => state.items);

  const { id } = useParams();

  const TheTask = Tasks.find((e) => {
    if (e.id === id) {
      return e;
    }
  });

  const likeClicked = () => {
    dispatch(reactionAdded({ name: "like", id: id }));
  };
  const dislikeClicked = () => {
    dispatch(reactionAdded({ name: "dislike", id: id }));
  };

  return (
    <div className="flex gap-3">
      <button
        className="border border-gray-200 rounded-lg px-3 py-2 hover:border-gray-400 duration-300"
        onClick={likeClicked}
      >{`👍${TheTask.reaction.like}`}</button>
      <button
        className="border border-gray-200 rounded-lg px-3 py-2 hover:border-gray-400 duration-300"
        onClick={dislikeClicked}
      >{`👎${TheTask.reaction.dislike}`}</button>
    </div>
  );
}

export default Reactions;
