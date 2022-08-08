import "../../dist/output.css";
import { reactionAdded } from "../features/itemSlicer";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

function Reactions() {
  const dispatch = useDispatch();
  const Tasks = useSelector((state) => state.items);
  const nightModeStatus = useSelector((state) => state.nightMode);

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

  let styles;
  if (nightModeStatus) {
    styles = {
      buttons:
        "border border-zinc-700 rounded-lg px-3 py-2 hover:border-blue-600 duration-300",
    };
  } else {
    styles = {
      buttons:
        "border border-gray-300 rounded-lg px-3 py-2 hover:border-blue-600 duration-300",
    };
  }

  return (
    <div className="flex gap-3">
      <button
        className={styles.buttons}
        onClick={likeClicked}
      >{`👍${TheTask.reaction.like}`}</button>
      <button
        className={styles.buttons}
        onClick={dislikeClicked}
      >{`👎${TheTask.reaction.dislike}`}</button>
    </div>
  );
}

export default Reactions;
