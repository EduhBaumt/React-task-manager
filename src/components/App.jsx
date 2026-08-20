import Sidebar from "./Sidebar.jsx";
import Tasks from "./Tasks.jsx";

function App() {
  return (
    <div className="flex gap-9">
      <Sidebar />
      <Tasks />
    </div>
  );
}

export default App;
