import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import NotFound from "../notFound/404";
import "../../dist/output.css";
import Reactions from "./reacions";

function OneTask() {
  const { id } = useParams();
  const task = useSelector((state) => state.items.find((key) => key.id === id));
  const allTasks = useSelector((state) => state.items);
  const nightModeStatus = useSelector((state) => state.nightMode);

  const theUser = useSelector((state) =>
    state.users.find((user) => {
      if (task.user === user.id) {
        return user;
      }
    })
  );

  let or = allTasks.map((e) => {
    if (e.id != id) return false;
  });
  or = Boolean(or);

  let styles;
  if (nightModeStatus) {
    styles = {
      main: "w-full h-full bg-zinc-900 text-white flex flex-col items-center justify-center gap-12",
    };
  } else {
    styles = {
      main: "w-full h-full flex flex-col items-center justify-center gap-12",
    };
  }

  if (or === false) {
    return <NotFound />;
  } else
    return (
      <div className={styles.main}>
        <h2 className="text-3xl">{task.content}</h2>
        {theUser ? (
          <h2>{`user : ${theUser.name}`}</h2>
        ) : (
          <h2>"user undefined"</h2>
        )}

        <Link to={`/editTasks/${id}`}>
          <button className="px-5 py-2 rounded-full bg-purple-500 text-white hover:bg-purple-600 duration-300 ">
            Edit Task
          </button>
        </Link>
        <Link to="/">
          <button className="px-5 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 duration-300 ">
            back home
          </button>
        </Link>
        <Reactions />
      </div>
    );
}

export default OneTask;
