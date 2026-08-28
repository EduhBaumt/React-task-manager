import Sidebar from "./Sidebar.jsx";
import Tasks from "./Tasks.jsx";
import { Toaster } from "sonner";

function App() {
  return (
    <div className="flex">
      <Toaster richColors />
      <Sidebar />
      <Tasks />
    </div>
  );
}

export default App;
