import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import NotFound from "../notFound/404";
import "../../dist/output.css";

function OneTask() {
  const { id } = useParams();
  // const TaskID = math.params;

  const task = useSelector((state) => state.items.find((key) => key.id === id));
  const allTasks = useSelector((state) => state.items);

  let or = allTasks.map((e) => {
    if (e.id != id) return false;
  });

  or = Boolean(or);

  if (or === false) {
    return <NotFound />;
  } else
    return (
      <div className="w-full h-full flex items-center justify-center">
        <h2 className="text-3xl">{task.content}</h2>
      </div>
    );
}

export default OneTask;
