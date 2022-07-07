import "../UsersStyle.css";

const UsersTasks = () => {
  return (
    <div className="taskConatiner">
      <h1 style={{ marginRight: "245px", fontFamily: "Comic Neue" }}>
        Task List
      </h1>
      <div className="constainerForTasks">
        <label>
          <input type="checkbox" />
          Option 1
        </label>
        <label>
          <input type="checkbox" />
          Option 2
        </label>
        <label>
          <input type="checkbox" />
          Option 3
        </label>
      </div>
    </div>
  );
};

export default UsersTasks;
